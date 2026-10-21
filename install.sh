#!/usr/bin/env bash
# ============================================================================
# Prajna (प्रज्ञा) Universal Interactive Installer
# Supports Linux (Ubuntu, Debian, Fedora, Arch), macOS & Chrome OS
# ============================================================================

set -e

BOLD="\033[1m"
GREEN="\033[0;32m"
CYAN="\033[0;36m"
YELLOW="\033[0;33m"
RESET="\033[0m"

echo -e "${CYAN}======================================================================${RESET}"
echo -e "${BOLD}🕉️ प्रज्ञा (Prajna) v1.0.0 — Universal Installer${RESET}"
echo -e "Autonomous Sanskrit-Based Computing Language & Interactive Runtime"
echo -e "${CYAN}======================================================================${RESET}"

# 1. Detect Platform
OS="$(uname -s)"
ARCH="$(uname -m)"
PLATFORM="unknown"

case "$OS" in
    Linux*)
        if grep -qi "chrome" /etc/os-release 2>/dev/null || [ -d "/opt/google/cros-containers" ]; then
            PLATFORM="chromeos"
        else
            PLATFORM="linux"
        fi
        ;;
    Darwin*)
        PLATFORM="macos"
        ;;
    *)
        PLATFORM="unix"
        ;;
esac

echo -e "Detected OS: ${BOLD}$PLATFORM ($ARCH)${RESET}"

INSTALL_DIR="${PRAJNA_DIR:-$HOME/.prajna}"
BIN_DIR="$INSTALL_DIR/bin"

# 2. Interactive Prompt (unless -y / non-interactive)
if [ "$1" != "-y" ] && [ "$1" != "--yes" ] && [ -t 0 ]; then
    read -p "Install Prajna to $INSTALL_DIR? [Y/n] " response
    case "$response" in
        [nN][oO]|[nN])
            echo "Installation cancelled."
            exit 0
            ;;
    esac
fi

echo -e "\n${CYAN}>>> Setting up directory structure...${RESET}"
mkdir -p "$BIN_DIR" "$INSTALL_DIR/examples" "$INSTALL_DIR/docs"

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

# 3. Copy or Download Binaries
if [ -f "$SCRIPT_DIR/bin/pr_prajna.exe" ]; then
    echo "Installing from local repository build..."
    cp -f "$SCRIPT_DIR/bin/pr_prajna.exe" "$BIN_DIR/pr_prajna.exe"
    cp -f "$SCRIPT_DIR/bin/pr_prajna.exe" "$BIN_DIR/prajna.exe"
    [ -f "$SCRIPT_DIR/README_EN.md" ] && cp -f "$SCRIPT_DIR/README_EN.md" "$INSTALL_DIR/README.md"
    [ -d "$SCRIPT_DIR/udaharanani" ] && cp -rf "$SCRIPT_DIR/udaharanani/"* "$INSTALL_DIR/examples/" 2>/dev/null || true
else
    echo "Downloading official release from GitHub..."
    TAR_NAME="prajna-linux-x64.tar.gz"
    if [ "$PLATFORM" = "macos" ]; then
        TAR_NAME="prajna-macos-universal.tar.gz"
    fi
    DOWNLOAD_URL="https://github.com/divyanshu2074/prajna-native/releases/download/v1.0.0/$TAR_NAME"
    TMP_TAR="/tmp/prajna-install.tar.gz"
    curl -fsSL "$DOWNLOAD_URL" -o "$TMP_TAR" || wget -qO "$TMP_TAR" "$DOWNLOAD_URL"
    tar -xzf "$TMP_TAR" -C "$INSTALL_DIR"
    rm -f "$TMP_TAR"
fi

# 4. Generate Launcher Script
cat << 'EOF' > "$BIN_DIR/prajna"
#!/usr/bin/env bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
if [ -f "$DIR/pr_prajna.exe" ]; then
    exec mono "$DIR/pr_prajna.exe" "$@"
elif [ -f "$DIR/prajna.exe" ]; then
    exec mono "$DIR/prajna.exe" "$@"
else
    echo "Error: Prajna executable not found in $DIR"
    exit 1
fi
EOF

chmod +x "$BIN_DIR/prajna"

# 5. Configure Shell Environment Variables (PRAJNA_HOME and PATH)
echo -e "${CYAN}>>> Configuring shell environment variables...${RESET}"

ENV_SNIPPET="
# Prajna Sanskrit Autonomous Programming Language
export PRAJNA_HOME=\"$INSTALL_DIR\"
export PATH=\"\$PRAJNA_HOME/bin:\$PATH\"
"

SHELL_CONFIGS=()
[ -f "$HOME/.bashrc" ] && SHELL_CONFIGS+=("$HOME/.bashrc")
[ -f "$HOME/.zshrc" ] && SHELL_CONFIGS+=("$HOME/.zshrc")
[ -f "$HOME/.profile" ] && SHELL_CONFIGS+=("$HOME/.profile")

if [ ${#SHELL_CONFIGS[@]} -eq 0 ]; then
    SHELL_CONFIGS+=("$HOME/.profile")
    touch "$HOME/.profile"
fi

for cfg in "${SHELL_CONFIGS[@]}"; do
    if ! grep -q "PRAJNA_HOME" "$cfg" 2>/dev/null; then
        echo "$ENV_SNIPPET" >> "$cfg"
        echo -e "  ${GREEN}✓${RESET} Added PRAJNA_HOME & PATH to $(basename "$cfg")"
    else
        echo -e "  ${GREEN}✓${RESET} Already configured in $(basename "$cfg")"
    fi
done

# Fish shell support
if [ -d "$HOME/.config/fish" ]; then
    FISH_CFG="$HOME/.config/fish/config.fish"
    if [ -f "$FISH_CFG" ] && ! grep -q "PRAJNA_HOME" "$FISH_CFG"; then
        echo -e "\nset -gx PRAJNA_HOME \"$INSTALL_DIR\"\nfish_add_path \"\$PRAJNA_HOME/bin\"" >> "$FISH_CFG"
        echo -e "  ${GREEN}✓${RESET} Added PATH to config.fish"
    fi
fi

# 6. Check Mono Runtime
echo -e "\n${CYAN}>>> Checking Mono ECMA Runtime...${RESET}"
if command -v mono >/dev/null 2>&1; then
    MONO_VER=$(mono --version | head -n 1)
    echo -e "  ${GREEN}✓${RESET} Runtime found: $MONO_VER"
else
    echo -e "  ${YELLOW}!${RESET} Mono runtime not found. Please install it to execute Prajna:"
    if [ "$PLATFORM" = "macos" ]; then
        echo -e "    ${BOLD}brew install mono${RESET}"
    elif command -v apt-get >/dev/null 2>&1; then
        echo -e "    ${BOLD}sudo apt-get update && sudo apt-get install -y mono-complete${RESET}"
    elif command -v dnf >/dev/null 2>&1; then
        echo -e "    ${BOLD}sudo dnf install -y mono-complete${RESET}"
    elif command -v pacman >/dev/null 2>&1; then
        echo -e "    ${BOLD}sudo pacman -S mono${RESET}"
    fi
fi

echo -e "\n${GREEN}======================================================================${RESET}"
echo -e "${BOLD}${GREEN}✓ Prajna successfully installed to $INSTALL_DIR!${RESET}"
echo -e "To start using Prajna immediately in your current terminal, run:"
echo -e "  ${CYAN}export PRAJNA_HOME=\"$INSTALL_DIR\"${RESET}"
echo -e "  ${CYAN}export PATH=\"\$PRAJNA_HOME/bin:\$PATH\"${RESET}"
echo -e "\nOr start a new terminal session and type:"
echo -e "  ${BOLD}prajna${RESET}        (Launches Interactive Sanskrit REPL)"
echo -e "  ${BOLD}prajna help${RESET}   (Displays Command Reference)"
echo -e "${GREEN}======================================================================${RESET}\n"
