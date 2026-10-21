# Prajna Standard Library & Language Extensions

This document details the standard library built-ins, type system enhancements, and core language features available in the Prajna programming language.

---

## 1. Sets (`समुच्चयः`)

| Function | Arity | Description |
|---|---|---|
| `समुच्चय_रचय()` | 0 | Instantiates a new empty mathematical set with unique elements. |
| `समुच्चय_योजय(set, item)` | 2 | Inserts an item into the set (duplicates automatically ignored). |
| `समुच्चय_अस्ति(set, item)` | 2 | Returns `सत्यम्` (true) if the item is in the set, else `असत्यम्` (false). |
| `समुच्चय_निष्कासय(set, item)` | 2 | Removes the specified item from the set. |
| `समुच्चय_दीर्घता(set)` | 1 | Returns the total count of unique items in the set. |
| `समुच्चय_मेलनम्(set1, set2)` | 2 | Returns the mathematical union ($A \cup B$) of two sets. |
| `समुच्चय_छेदः(set1, set2)` | 2 | Returns the mathematical intersection ($A \cap B$) of two sets. |
| `समुच्चय_अन्तरम्(set1, set2)` | 2 | Returns the mathematical difference ($A \setminus B$) of two sets. |
| `समुच्चय_सूची(set)` | 1 | Converts the set to a standard dynamic list (`सूची`). |

---

## 2. Tuples (`युग्मम्`)

| Function | Arity | Description |
|---|---|---|
| `युग्म_रचय(item1, item2, ...)` | N | Creates an immutable sequence tuple of specified elements. |
| `युग्म_प्राप्नु(tuple, index)` | 2 | Retrieves the item at the specified zero-based index. |
| `युग्म_दीर्घता(tuple)` | 1 | Returns the number of elements in the tuple. |

---

## 3. Exception & Error Handling (`दोष-नियन्त्रणम्`)

Prajna features native structured exception handling:

```prajna
प्रयत्नः {
    लिख "प्रक्रिया प्रारब्धा...";
    उत्थापय "अमान्य-मूल्यम्";
} गृह्णातु (दोषः) {
    लिख "त्रुटिः दृष्टा: " + दोषः;
} अन्ते {
    लिख "संसाधनानि मुक्तानि।";
}
```

| Construct | Syntax | Description |
|---|---|---|
| `प्रयत्नः { ... }` | Block | Encloses protected code blocks subject to error interception. |
| `गृह्णातु (दोषः) { ... }` | Catch Block | Intercepts raised errors and binds diagnostic message to variable. |
| `अन्ते { ... }` | Finally Block | Guarantees deterministic execution regardless of exceptions. |
| `उत्थापय <संदेशः>;` | Statement | Raises a runtime exception with custom error description. |

---

## 4. Functional & Collection Aggregations

| Function | Arity | Description |
|---|---|---|
| `योगः(list)` | 1 | Computes the arithmetic sum of numerical list elements. |
| `न्यूनतमम्(list)` | 1 | Returns the minimum element in the collection. |
| `अधिकतमम्(list)` | 1 | Returns the maximum element in the collection. |
| `सर्वम्(list)` | 1 | Returns `सत्यम्` if all elements evaluate to truthy, else `असत्यम्`. |
| `किमपि(list)` | 1 | Returns `सत्यम्` if at least one element is truthy. |
| `परिसरः(start, end, step)` | 3 | Generates an arithmetic progression list from `start` to `end` with `step`. |
| `गणना_सहित(list)` | 1 | Returns an indexed list of `[index, value]` pairs. |
| `सङ्गमः(list1, list2)` | 2 | Zips two lists into paired elements. |

---

## 5. File & Path Operations (`सञ्चिका`, `मार्गः`)

| Function | Arity | Description |
|---|---|---|
| `मार्ग_संयोजय(dir, filename)` | 2 | Cross-platform filesystem path concatenation. |
| `मार्ग_मूलनाम(path)` | 1 | Returns the file name component of a path. |
| `मार्ग_निर्देशिका(path)` | 1 | Returns the directory component of a path. |
| `मार्ग_विस्तारः(path)` | 1 | Returns the file extension (e.g. `".pr"`). |
| `सञ्चिका_पठ(path)` | 1 | Reads full text content from file (UTF-8). |
| `सञ्चिका_लिख(path, content)` | 2 | Writes string content to file (UTF-8). |
| `सञ्चिका_विद्यते(path)` | 1 | Checks whether file exists. |
| `सञ्चिका_लोपय(path)` | 1 | Deletes file from filesystem. |
| `सञ्चिका_निर्देशिका_सूची(path)` | 1 | Returns list of file entries in directory. |
| `निर्देशिका_रचय(path)` | 1 | Creates new directory path recursively. |

---

## 6. Network & HTTP Operations (`जाल-तन्त्रम्`)

| Function | Arity | Description |
|---|---|---|
| `जाल_प्राप्नु(url)` | 1 | Performs HTTP GET request and returns response body as string. |
| `जाल_प्रेषय(url, jsonBody)` | 2 | Performs HTTP POST request sending JSON payload. |
| `जाल_अवतारणम्(url, destPath)` | 2 | Downloads remote resource directly to local file. |

---

## 7. Dynamic Objects & Records (`वस्तु`)

| Function | Arity | Description |
|---|---|---|
| `वस्तु_रचय()` | 0 | Instantiates a dynamic structured object record. |
| `वस्तु_स्थापय(obj, prop, value)`| 3 | Assigns property value on object. |
| `वस्तु_प्राप्नु(obj, prop)` | 2 | Accesses property value from object. |
| `वस्तु_गुणाः(obj)` | 1 | Returns list of property keys on object. |

---

## 8. Mathematics & Statistics (`गणितम्`)

| Function | Arity | Description |
|---|---|---|
| `गणित_माध्यम्(list)` | 1 | Calculates arithmetic mean of a dataset. |
| `गणित_मध्यिका(list)` | 1 | Calculates statistical median of a dataset. |
| `गणित_लॉग(x)` | 1 | Natural logarithm ($\ln x$). |
| `गणित_लॉग१०(x)` | 1 | Base-10 logarithm ($\log_{10} x$). |
| `गणित_वर्गमूलम्(x)` | 1 | Square root ($\sqrt{x}$). |
| `गणित_घातः(x, y)` | 2 | Power function ($x^y$). |
| `गणित_परममूल्यम्(x)` | 1 | Absolute value ($|x|$). |
| `गणित_ज्या(rad)` | 1 | Sine function. |
| `गणित_कोज्या(rad)` | 1 | Cosine function. |
| `गणित_स्पर्शज्या(rad)` | 1 | Tangent function. |
| `गणित_अधः(x)` | 1 | Floor. |
| `गणित_उपरि(x)` | 1 | Ceiling. |
| `गणित_समीपम्(x)` | 1 | Round. |
| `गणित_पाई()` | 0 | Constant $\pi$. |
| `गणित_ई()` | 0 | Euler constant $e$. |
| `यादृच्छिक()` | 0 | Random float in $[0, 1)$. |
| `यादृच्छिक_अन्तराले(min, max)` | 2 | Random integer in $[min, max]$. |

---

## 9. System, Time & Serialization

| Function | Arity | Description |
|---|---|---|
| `प्रणाली_सञ्चालकः()` | 0 | Returns platform identifier (`"windows"`, `"linux"`, `"macos"`, `"chromeos"`). |
| `प्रणाली_वातावरणम्(name)` | 1 | Retrieves system environment variable. |
| `काल_वर्तमान_मिली()` | 0 | Unix timestamp in milliseconds. |
| `काल_वर्तमान_क्षणम्()` | 0 | Formatted local timestamp (`YYYY-MM-DD HH:MM:SS`). |
| `काल_विराम(ms)` | 1 | Thread sleep in milliseconds. |
| `जेसन_रूपान्तरम्(obj)` | 1 | Converts object/collection to JSON string. |
| `जेसन_पठ(str)` | 1 | Deserializes JSON string into native collection. |
| `प्रकारः(obj)` | 1 | Type introspection (`"संख्या"`, `"दशांशः"`, `"सूत्रम्"`, `"सूची"`, `"शब्दकोषः"`, `"समुच्चयः"`, `"बूलियनम्"`, `"शून्यम्"`). |
| `दशांश_परिवर्तय(obj)` | 1 | Converts string/number to double float. |
| `पूर्णाङ्क_परिवर्तय(obj)` | 1 | Converts string/number to 64-bit integer. |
| `आदेशः_निष्पादय(cmd)` | 1 | Executes shell/terminal command and captures output. |
| `आदेशतर्काः()` | 0 | Returns command line arguments array. |
| `बहिर्गच्छ(code)` | 1 | Terminates process with exit code. |

---

## 10. DataFrames, Matrices & Statistics (दत्ततालिका, संख्याव्यूहः, सांख्यिकी)

| Function | Arity | Description |
|---|---|---|
| `तालिका_रचय(columns)` | 1 | Initializes a new DataFrame with named column headers. |
| `तालिका_पङ्क्ति_योजय(df, row)` | 2 | Appends a row record to the DataFrame. |
| `तालिका_स्तम्भ_प्राप्नु(df, name)` | 2 | Extracts a column as a list by header name. |
| `तालिका_संक्षेपः(df)` | 1 | Generates structured summary metrics for the DataFrame. |
| `दत्त_पठ_csv(path)` | 1 | Reads a CSV file from disk into a native DataFrame. |
| `दत्त_लिख_csv(df, path)` | 2 | Serializes and saves a DataFrame to a CSV file. |
| `व्यूह_रचय(rows, cols, values)` | 3 | Initializes an $M \times N$ numerical matrix. |
| `व्यूह_प्राप्नु(m, r, c)` | 3 | Accesses element at row $r$ and column $c$. |
| `व्यूह_स्थापय(m, r, c, val)` | 4 | Updates element at row $r$ and column $c$. |
| `व्यूह_पङ्क्तयः(m)` | 1 | Returns number of rows in matrix. |
| `व्यूह_स्तम्भाः(m)` | 1 | Returns number of columns in matrix. |
| `व्यूह_गुणनम्(mA, mB)` | 2 | Computes matrix multiplication ($A \times B$). |
| `व्यूह_परिवर्तः(m)` | 1 | Transposes matrix ($A^T$). |
| `सदिश_अदिशगुणनम्(v1, v2)` | 2 | Computes dot product of two numerical vectors. |
| `सांख्यिकी_माध्यम्(list)` | 1 | Calculates arithmetic mean. |
| `सांख्यिकी_मध्यिका(list)` | 1 | Calculates median value. |
| `सांख्यिकी_विचरणम्(list)` | 1 | Calculates sample variance ($\sigma^2$). |
| `सांख्यिकी_प्रमाणविचलनम्(list)` | 1 | Calculates sample standard deviation ($\sigma$). |
| `सांख्यिकी_सहसम्बन्धः(x, y)` | 2 | Computes Pearson correlation coefficient ($r$). |
| `सांख्यिकी_समाश्रयणम्(x, y)` | 2 | Performs linear regression ($y = mx + c$), returning `[slope, intercept]`. |
| `पठ_पङ्क्ति()` | 0 | Reads a line of input from standard input (Console). |
