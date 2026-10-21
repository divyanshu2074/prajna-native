# प्रज्ञा स्वदेशी — बहु-प्रचालनतन्त्र-निर्माणविधिः (Cross-Platform Build Guide)

[English Version (आङ्ग्लसंस्करणम्)](./BUILD_EN.md)

---

## १. प्रचालनतन्त्राणाम् पूर्वापेक्षाः

प्रज्ञा-तन्त्रस्य निर्माणाय किमपि बाह्य-पैकेज-प्रबन्धकाः अथवा बाह्य-निर्भरताः न अपेक्ष्यन्ते। इदं आधुनिक-प्रचालनतन्त्रेषु स्वच्छतया सङ्कलयति:

- **Windows (10 / 11 ६४-बिट्)**: Microsoft .NET Framework 4.0+ (आधुनिक-वातायनेषु पूर्वनिर्मितम्)।
- **Linux (Ubuntu, Debian, Fedora, Arch, Alpine)**: मानक `mono-devel` पैकेज।
- **macOS (Intel तथा Apple Silicon ARM64)**: Homebrew द्वारा Mono (`brew install mono`)।
- **Chrome OS (Linux / Crostini)**: Crostini मध्ये `mono-devel` (`sudo apt-get install -y mono-devel`)।

---

## २. स्वयम्भू-निर्माणप्रवाहः

निर्माणप्रक्रियायां पृथक्कृत-आरम्भक-सङ्कलकः (`bootstrap/prajna.exe`) `prajna_compiler.pr` सङ्कलयति:

```
[ prajna_compiler.pr ] (शुद्ध-प्रज्ञा-संस्कृत-स्रोतः)
          │
          ▼ (bootstrap/prajna.exe द्वारा सङ्कलितम्)
   [ bin/pr_prajna.exe ]
          │
          ▼ (POSIX तन्त्रेषु bin/prajna धावकस्य निर्माणम्)
   [ सम्पूर्ण-तन्त्र-परीक्षणमाला: मूलं प्रवर्धितं च ]
          │
          ▼
   १००% दृढप्रमाणितम् यशः
```

---

## ३. निर्माण-आदेशाः

### Linux, macOS तथा Chrome OS कृते:
```bash
git clone https://github.com/divyanshu2074/prajna-native.git
cd prajna-native
chmod +x build.sh
./build.sh
```

सर्वप्रणालीषु प्रतिष्ठापनाय (System-wide install):
```bash
sudo cp bin/prajna /usr/local/bin/prajna
sudo cp bin/pr_prajna.exe /usr/local/bin/pr_prajna.exe
```

### Windows Command Prompt कृते:
```cmd
cd prajna-native
build.bat
```

### Windows PowerShell कृते:
```powershell
Set-Location "prajna-native"
.\build.ps1
```

---

## ४. निष्पाद्य-सञ्चिकाः

- **निष्पाद्य-सङ्कलकः**: `bin/pr_prajna.exe`
- **POSIX धावकः**: `bin/prajna` (Linux, macOS, Chrome OS कृते)
- **परीक्षण-पुष्टिः**: अङ्कगणितम्, निर्णयाः, चक्राणि, फलनानि, सूच्यः, कोषाः, समुच्चयाः, युग्मानि, दोष-नियन्त्रणम्, मार्ग-प्रबन्धनम्, साङ्ख्यिकी, वस्तु-प्रबन्धनम् च १००% सफलाः सन्ति।
