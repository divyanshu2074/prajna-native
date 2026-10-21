#!/usr/bin/env bash
# ============================================================================
# Prajna (प्रज्ञा) — Universal Build Script for Linux, macOS & Chrome OS
# ============================================================================

set -e

CYAN='\033[0;36m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${CYAN}================================================================${NC}"
echo -e "${CYAN}प्रज्ञा (Prajna) — Cross-Platform Build & Verification System${NC}"
echo -e "${CYAN}Supporting Linux, macOS, Chrome OS & Windows POSIX Environments${NC}"
echo -e "${CYAN}================================================================${NC}"

# 1. Detect Operating System and Architecture
OS="$(uname -s)"
ARCH="$(uname -m)"
PLATFORM="unknown"

case "${OS}" in
    Linux*)
        if [ -f /etc/os-release ] && grep -qi "chrome" /etc/os-release; then
            PLATFORM="chromeos"
            echo -e "Platform detected: ${GREEN}Chrome OS (Linux / Crostini) [${ARCH}]${NC}"
        else
            PLATFORM="linux"
            echo -e "Platform detected: ${GREEN}GNU/Linux [${ARCH}]${NC}"
        fi
        ;;
    Darwin*)
        PLATFORM="macos"
        echo -e "Platform detected: ${GREEN}Apple macOS [${ARCH}]${NC}"
        ;;
    CYGWIN*|MINGW*|MSYS*)
        PLATFORM="windows"
        echo -e "Platform detected: ${GREEN}Windows POSIX [${ARCH}]${NC}"
        ;;
    *)
        PLATFORM="unix"
        echo -e "Platform detected: ${YELLOW}Generic POSIX (${OS}) [${ARCH}]${NC}"
        ;;
esac

# 2. Check for Execution Runtime (mono / dotnet)
MONO_BIN="$(command -v mono || true)"

if [ -z "$MONO_BIN" ] && [ "$PLATFORM" != "windows" ]; then
    echo -e "${RED}[ERROR] 'mono' runtime was not found in your PATH.${NC}"
    echo -e "Prajna uses standard ECMA CLI infrastructure on POSIX systems."
    echo -e "\nPlease install mono using your package manager:"
    if [ "$PLATFORM" = "macos" ]; then
        echo -e "  ${YELLOW}brew install mono${NC}"
    elif [ "$PLATFORM" = "chromeos" ] || [ -f /etc/debian_version ]; then
        echo -e "  ${YELLOW}sudo apt-get update && sudo apt-get install -y mono-devel mono-complete${NC}"
    elif [ -f /etc/fedora-release ]; then
        echo -e "  ${YELLOW}sudo dnf install -y mono-devel${NC}"
    elif [ -f /etc/arch-release ]; then
        echo -e "  ${YELLOW}sudo pacman -S mono${NC}"
    elif [ -f /etc/alpine-release ]; then
        echo -e "  ${YELLOW}apk add mono mono-dev${NC}"
    else
        echo -e "  Visit https://www.mono-project.com/download/stable/ for installation."
    fi
    exit 1
fi

mkdir -p bin

# 3. Bootstrapping
echo -e "\n${YELLOW}[1/3] Bootstrapping self-hosted compiler prajna_compiler.pr...${NC}"
if [ "$PLATFORM" = "windows" ]; then
    ./bootstrap/prajna.exe build prajna_compiler.pr -o bin/pr_prajna.exe
else
    mono ./bootstrap/prajna.exe build prajna_compiler.pr -o bin/pr_prajna.exe
fi

if [ ! -f "bin/pr_prajna.exe" ]; then
    echo -e "${RED}[FAILED] Compilation of bin/pr_prajna.exe failed!${NC}"
    exit 1
fi

# 4. Generate native wrapper launcher
cat << 'EOF' > bin/prajna
#!/usr/bin/env sh
DIR="$(cd "$(dirname "$0")" && pwd)"
if [ "$(uname -s)" = "Darwin" ] || [ "$(uname -s)" = "Linux" ]; then
    exec mono "$DIR/pr_prajna.exe" "$@"
else
    exec "$DIR/pr_prajna.exe" "$@"
fi
EOF
chmod +x bin/prajna

# 5. Verification test suite
echo -e "\n${YELLOW}[2/3] Running full system verification with newly built compiler...${NC}"
./bin/prajna run parikshanani/test_sampurna_tantram.pr

echo -e "\n${YELLOW}[3/3] Running expanded capabilities verification...${NC}"
./bin/prajna run parikshanani/test_expanded_capabilities.pr

echo -e "\n${GREEN}================================================================${NC}"
echo -e "${GREEN}[SUCCESS] Prajna compiled and verified successfully!${NC}"
echo -e "${GREEN}Launcher script: bin/prajna${NC}"
echo -e "${GREEN}Native binary:   bin/pr_prajna.exe${NC}"
echo -e "${CYAN}To install system-wide:${NC}"
echo -e "  sudo cp bin/prajna /usr/local/bin/prajna"
echo -e "  sudo cp bin/pr_prajna.exe /usr/local/bin/pr_prajna.exe"
echo -e "${GREEN}================================================================${NC}"
