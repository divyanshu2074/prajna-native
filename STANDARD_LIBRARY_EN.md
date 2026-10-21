# Prajna Standard Library & Language Extensions

This document details the standard library built-ins and type system enhancements available in the Prajna programming language.

---

## 1. Dictionary / Hash Map (`शब्दकोषः`)

| Function | Arity | Description |
|---|---|---|
| `कोष_रचय()` | 0 | Instantiates a new empty dictionary. |
| `कोष_स्थापय(dict, key, value)` | 3 | Inserts or updates the specified key-value pair. |
| `कोष_प्राप्नु(dict, key)` | 2 | Retrieves the value associated with the specified key. |
| `कोष_अस्ति(dict, key)` | 2 | Returns `सत्यम्` (true) if the key exists, else `असत्यम्` (false). |
| `कोष_निष्कासय(dict, key)` | 2 | Removes the specified key and returns its value. |
| `कोष_कुञ्चिकाः(dict)` | 1 | Returns a list of all dictionary keys. |
| `कोष_मूल्यानि(dict)` | 1 | Returns a list of all dictionary values. |
| `कोष_दीर्घता(dict)` | 1 | Returns the number of entries in the dictionary. |
| `कोष_स्वच्छीकुरु(dict)` | 1 | Clears all entries from the dictionary. |

---

## 2. Advanced List Operations (`सूची`)

| Function | Arity | Description |
|---|---|---|
| `सूची_खण्डम्(list, start, length)` | 3 | Extracts a sub-slice of the list from `start` of length `length`. |
| `सूची_निष्कासय(list, index)` | 2 | Removes and returns the element at the specified index. |
| `सूची_शोधय(list)` | 1 | Sorts the list elements in place. |
| `सूची_विपरीत(list)` | 1 | Reverses the list elements in place. |
| `सूची_अन्तर्भावः(list, item)` | 2 | Returns true if the item is present in the list. |
| `सूची_संयोजय(list1, list2)` | 2 | Concatenates two lists and returns a new list. |
| `सूची_अन्वेषणम्(list, item)` | 2 | Returns the zero-based index of the item, or -1 if not found. |

---

## 3. Advanced String Operations (`सूत्रम्`)

| Function | Arity | Description |
|---|---|---|
| `सूत्र_विभाजय(str, delim)` | 2 | Splits `str` by delimiter `delim` into a list. |
| `सूत्र_संयोजय(delim, list)` | 2 | Joins list elements into a single string using delimiter. |
| `सूत्र_प्रतिस्थापनम्(orig, old, new)` | 3 | Replaces occurrences of `old` with `new` in `orig`. |
| `सूत्र_अन्वेषणम्(str, substr)` | 2 | Returns index of first occurrence of `substr` in `str` (-1 if none). |
| `सूत्र_छेदय(str)` | 1 | Trims leading and trailing whitespace. |
| `सूत्र_आरम्भः(str, prefix)` | 2 | Returns true if string starts with `prefix`. |
| `सूत्र_अन्तः(str, suffix)` | 2 | Returns true if string ends with `suffix`. |
| `लघु_वर्णमाला(str)` | 1 | Converts ASCII characters to lowercase. |
| `गुरु_वर्णमाला(str)` | 1 | Converts ASCII characters to uppercase. |

---

## 4. Mathematics Library (`गणितम्`)

| Function | Arity | Description |
|---|---|---|
| `गणित_वर्गमूलम्(x)` | 1 | Computes the square root of `x` ($\sqrt{x}$). |
| `गणित_घातः(x, y)` | 2 | Computes $x^y$ (power). |
| `गणित_परममूल्यम्(x)` | 1 | Computes the absolute value ($|x|$). |
| `गणित_ज्या(rad)` | 1 | Computes sine of angle in radians. |
| `गणित_कोज्या(rad)` | 1 | Computes cosine of angle in radians. |
| `गणित_स्पर्शज्या(rad)` | 1 | Computes tangent of angle in radians. |
| `गणित_अधः(x)` | 1 | Floor function. |
| `गणित_उपरि(x)` | 1 | Ceiling function. |
| `गणित_समीपम्(x)` | 1 | Round to nearest integer. |
| `गणित_पाई()` | 0 | Returns the mathematical constant $\pi$ (3.14159...). |
| `गणित_ई()` | 0 | Returns Euler's constant $e$ (2.71828...). |
| `यादृच्छिक()` | 0 | Generates a pseudo-random floating point number in $[0, 1)$. |
| `यादृच्छिक_अन्तराले(min, max)` | 2 | Generates a pseudo-random integer in range $[min, max]$. |

---

## 5. Time, Operating System, & Types (`कालः`, `प्रणाली`, `प्रकारः`)

| Function | Arity | Description |
|---|---|---|
| `काल_वर्तमान_मिली()` | 0 | Returns milliseconds since Unix epoch. |
| `काल_वर्तमान_क्षणम्()` | 0 | Returns formatted current date/time string (`YYYY-MM-DD HH:MM:SS`). |
| `काल_विराम(ms)` | 1 | Suspends thread execution for `ms` milliseconds. |
| `सञ्चिका_लोपय(path)` | 1 | Deletes the specified file from the filesystem. |
| `सञ्चिका_निर्देशिका_सूची(path)` | 1 | Returns an array of filenames in the directory. |
| `निर्देशिका_रचय(path)` | 1 | Creates a directory path. |
| `प्रणाली_वातावरणम्(key)` | 1 | Reads an environment variable by name. |
| `प्रणाली_सञ्चालकः()` | 0 | Returns operating system identifier (`"windows"`). |
| `जेसन_रूपान्तरम्(obj)` | 1 | Serializes object to JSON string representation. |
| `जेसन_पठ(str)` | 1 | Parses JSON string. |
| `प्रकारः(obj)` | 1 | Returns type name string (`"संख्या"`, `"दशांशः"`, `"सूत्रम्"`, `"सूची"`, `"शब्दकोषः"`, `"बूलियनम्"`). |
| `दशांश_परिवर्तय(obj)` | 1 | Converts string/number representation to double precision float. |
| `पूर्णाङ्क_परिवर्तय(obj)` | 1 | Converts string/number representation to 64-bit integer. |
