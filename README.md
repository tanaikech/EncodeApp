# EncodeApp

<a name="TOP"></a>
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENCE)

<a name="Overview"></a>

# Overview

**EncodeApp is a GAS library for retrieving the encoding set (charset) and doing URL encode with the specific encoding set using Google Apps Script (GAS).**

# Library's project key

```
1DsJdRQ9D6nXgbxVVvOroM3EYJOcB197Isvt2Sl4sziW3m9IqqeB9YoWy
```

# Methods

| Methods                                               | Description                                      |
| :---------------------------------------------------- | :----------------------------------------------- |
| [getCharset(blob)](#getcharset)                       | Retrieve the encoding set (charset) of the blob. |
| [encodeURIWithCharset(object)](#encodeuriwithcharset) | URI encode with the specific charset.            |

<a name="usage"></a>

# Usage:

## 1. Install library

In order to use this library, please install this library as follows.

1. Create a GAS project.

   - You can use this library for the GAS project of both the standalone type and the container-bound script type.

1. [Install EncodeApp library](https://developers.google.com/apps-script/guides/libraries).

   - Library's project key is **`1DsJdRQ9D6nXgbxVVvOroM3EYJOcB197Isvt2Sl4sziW3m9IqqeB9YoWy`**.

### About scopes

This library use no scopes.

<a name="getcharset"></a>

## 2. Method: `getCharset`

In this method, the encoding set (charset) is retrieved from the blob. The corresponding list of encoding set is from [https://docs.oracle.com/javase/8/docs/technotes/guides/intl/encoding.doc.html](https://docs.oracle.com/javase/8/docs/technotes/guides/intl/encoding.doc.html) is used. **In this case, the returned value is the candidate.** So when you use this method, several charsets are returned as the candidate.

### Sample script

```javascript
var blob = DriveApp.getFileById("###").getBlob();
var res = EncodeApp.getCharset(blob);
Logger.log(res);
```

In this sample script, the charset of the file is retrieved.

<a name="encodeuriwithcharset"></a>

## 3. Method: `encodeURIWithCharset`

In this method, URL encode can be run with the specific charset. At Google Apps Script, when URL encode is run with `encodeURI()` and `encodeURIComponent()`, it is run as `UTF-8`. It seems that this is the specification. In this method, the URL encode can be run by selecting the charset.

### Sample script

```javascript
var object = {
  charset: "Shift-JIS",
  text: "本日は晴天なり"
};
var res = EncodeApp.encodeURIWithCharset(object);
Logger.log(res);
```

In this sample script, the URL encode is run with `Shift-JIS`. The following result is retrieved.

```json
{
  "encodedType1": "%96%7B%93%FA%82%CD%90%B0%93%56%82%C8%82%E8",
  "encodedType2": "%96%7B%93%FA%82%CD%90%B0%93V%82%C8%82%E8",
  "blob": Blob,
  "charset": "Shift-JIS"
}
```

`Blob` is the blob with the text of `本日は晴天なり` converted to `Shift-JIS`.

### Reference:

- [URL Encode with Shift-JIS using Google Apps Script](https://gist.github.com/tanaikech/f23755d7e024fea9c0f0e036853484d4)

---

<a name="licence"></a>

# Licence

[MIT](LICENCE)

<a name="author"></a>

# Author

[Tanaike](https://tanaikech.github.io/about/)

If you have any questions and commissions for me, feel free to tell me.

<a name="updatehistory"></a>

# Update History

- v1.0.0 (January 24, 2020)

  1. Initial release.

[TOP](#top)
