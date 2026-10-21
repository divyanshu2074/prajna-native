# प्रज्ञा (Prajna) — स्वयम्भू-संस्कृत-सङ्गणकप्रणाली

**प्रज्ञा स्वदेशी (Prajna Native)** संस्कृतभाषाधारिता स्वायत्ता सङ्गणकप्रणाली तथा प्रोग्रामिंग-भाषा अस्ति।

अयम् कोषः **Python-तन्त्रात् १००% मुक्तः, स्वयम्भू-विकाससञ्चयः** अस्ति। अत्र सङ्कलकः, गणनानिर्वाहकः, अन्तःस्थप्रतिनिधिः, यन्त्रनिर्देशसमुच्चयः, परीक्षणमाला च सम्पूर्णतया प्रज्ञा-भाषायामेव (`.pr`) लिखिताः सन्ति।

---

## १. संरचना

सम्पूर्णा संरचना संस्कृत-उपप्रणालीषु विभक्ता अस्ति:

```
Prajna-Native/
  ├── bootstrap/
  │   └── prajna.exe              # पृथक्कृतः स्वयम्भू-आरम्भक-सङ्कलकः
  ├── bin/
  │   └── pr_prajna.exe           # सङ्कलितः स्वयम्भू-प्रज्ञा-सङ्कलकः
  ├── bhasha/                     # अक्षरव्यवस्था तथा पदच्छेदः
  │   ├── akshara.pr              # देवनागरी-अक्षर-संसाधनम्
  │   ├── chihna.pr               # चिह्नप्रकाराः तथा मुख्यशब्दाः
  │   ├── pada_chedaka.pr         # स्वदेशी-पदच्छेदकः
  │   └── truti.pr                # संस्कृत-दोषनिरूपणम्
  ├── sangrahakah/                # वाक्यविश्लेषणम् तथा अर्थतन्त्रम्
  │   ├── vakya_vriksha.pr        # अमूर्तवाक्यवृक्ष-नोड्स (AST)
  │   ├── vakya_vishleshakah.pr   # वाक्यविश्लेषकः (Parser)
  │   └── artha_vishleshakah.pr   # अर्थविश्लेषकः (Scope & Symbols)
  ├── madhyapratinidhih/          # अन्तःस्थप्रतिनिधिः (IR)
  │   ├── pratinidhi_nirdesha.pr  # आईआर-निर्देश-परिभाषा
  │   ├── ankadapravaha_rekha.pr  # आँकडाप्रवाह-जाल-निर्माणम्
  │   └── nirmanakartri.pr        # आईआर-निर्माणकर्त्री
  ├── ganananirvahatantram/       # गणनानिर्वाहक-तन्त्राणि
  │   ├── nirvahatantram.pr       # आभासीय-यन्त्र-निर्वाहकः (VM)
  │   └── ankadapravaha_nirvahakah.pr # समानान्तर-प्रवाह-निर्वाहकः
  ├── yantravastuvinyasah/        # यन्त्रवास्तुविन्यासः
  │   ├── nirdesha_samuccayah.pr  # Prajna-ISA-1 ३२-बिट् निर्देशसमुच्चयः
  │   ├── ir_to_isa.pr            # पञ्जिका-आबण्टनं तथा ISA-अनुवादः
  │   └── native_compiler.pr      # स्वदेशी-वातायनमय-सङ्कलकः
  ├── hardware/                   # हार्डवेयर-सिम्युलेटरः
  │   └── hardware_sim.pr         # चक्रानुकारकः (Cycle-Accurate Sim)
  ├── prajna_compiler.pr          # मुख्य-स्वयम्भू-सङ्कलक-स्रोतः
  ├── prajna_cli.pr               # नियन्त्रण-साधनम् (CLI)
  ├── parikshanani/               # परीक्षणमाला
  │   ├── test_bhasha.pr          # भाषा-परीक्षणम्
  │   └── test_sampurna_tantram.pr# सम्पूर्ण-तन्त्र-परीक्षणम्
  ├── udaharanani/                # आदर्शोदाहरणानि
  │   ├── 01_mula_yoga.pr         # मूल-योगः
  │   ├── 02_yadi_anyatha.pr      # यदि-अन्यथा निर्णयः
  │   ├── 03_yavat_chakram.pr     # यावत्-चक्रम्
  │   ├── 04_phalanani.pr         # फलनानि
  │   ├── 05_ankadapravahah.pr    # आँकडाप्रवाहः
  │   └── prajna_notepad.pr       # पत्रलेखकः (Windows GUI App)
  ├── build.bat                   # निर्माण-आदेशसञ्चिका
  ├── build.ps1                   # पॉवरशेल-निर्माणसञ्चिका
  ├── README_SA.md                # संस्कृत-प्रलेखनम्
  ├── README_EN.md                # आङ्ग्ल-प्रलेखनम्
  ├── BUILD_SA.md                 # संस्कृत-निर्माणविधिः
  ├── BUILD_EN.md                 # आङ्ग्ल-निर्माणविधिः
  ├── ARCHITECTURE_SA.md          # वास्तुविन्यास-प्रलेखनम्
  ├── ARCHITECTURE_EN.md          # आङ्ग्ल-वास्तुविन्यासः
  ├── STANDARD_LIBRARY_SA.md      # प्रमाण-पुस्तकालय-प्रलेखनम्
  └── STANDARD_LIBRARY_EN.md      # आङ्ग्ल-पुस्तकालय-प्रलेखनम्
```

---

## २. निर्माणविधिः

केवलेन एकेन आदेशेन स्रोतसङ्केतात् सम्पूर्णस्य सङ्कलकस्य निर्माणम्:

```cmd
# कमाण्ड-प्रॉम्प्ट द्वारा
build.bat

# अथवा पॉवरशेल द्वारा
.\build.ps1
```

अयम् आदेशः पृथक्कृत-सङ्कलकेन (`bootstrap\prajna.exe`) `prajna_compiler.pr` सङ्कलय्य `bin\pr_prajna.exe` रचयति, अनन्तरं च सम्पूर्ण-परीक्षणमालां सञ्चालयति।

---

## ३. उपयोगविधिः

```powershell
# संस्करणं पश्यतु
.\bin\pr_prajna.exe version

# प्रोग्रामं निष्पाद्यसञ्चिकायां (.exe) सङ्कलयतु
.\bin\pr_prajna.exe compile udaharanani\01_mula_yoga.pr -o yoga.exe

# प्रोग्रामं प्रत्यक्षं सञ्चालयतु
.\bin\pr_prajna.exe run parikshanani\test_sampurna_tantram.pr

# स्वातन्त्र्ययुक्तां Windows GUI पत्रलेखक-सञ्चिकां रचयतु
.\bin\pr_prajna.exe compile udaharanani\prajna_notepad.pr -o notepad.exe --gui
```

---

## ४. मुख्यानि वैशिष्ट्यानि

१. **Python-निरपेक्षता**: अस्मिन् कोशे शून्य-पङ्क्तयः Python-भाषायाः सन्ति। सम्पूर्णा प्रणाली स्वयमेव सङ्कलयति।
२. **स्वयम्भू-स्थिरबिन्दुः (Fixed-Point Convergence)**: `pr_prajna.exe` द्वारा स्वस्यैव सङ्कलनेन समान-परिमाणा (२,३६,५४४ बाइट्) सञ्चिका उत्पद्यते।
३. **शुद्ध-संस्कृत-वाक्यविन्यासः**: देवनागरी-अङ्काः, स्वराः, व्यञ्जनानि, मात्राः, अन्तर्निर्मितानि फलनानि च।
४. **स्वदेशी-निष्पादनम्**: साक्षात् Windows PE ६४-बिट् `.exe` सञ्चिकानां निर्माणम्।
