/**
 * GitHub  https://github.com/tanaikech/EncodeApp<br>
 * Get charset of the inputted blob.<br>
 * @param {Blob} Blob Blob
 * @return {Object} Return Object
 */
function getCharset(blob) {
    return new EncodeApp(1).GetCharset(blob);
}

/**
 * GitHub  https://github.com/tanaikech/EncodeApp<br>
 * URI encode with the specific charset.<br>
 * @param {Object} Object Object
 * @return {Object} Return Object
 */
function encodeURIWithCharset(object) {
    return new EncodeApp(2).EncodeURIWithCharset(object);
}


// The corresponding list of encoding set is from
// https://docs.oracle.com/javase/8/docs/technotes/guides/intl/encoding.doc.html

;
(function(r) {
  var EncodeApp;
  EncodeApp = (function() {
    var encodedType1, encodedType2, getBlob;

    EncodeApp.name = "EncodeApp";

    function EncodeApp(p_) {
      if (p_ === 1) {
        this.charsets = [
          {
            "name": "CESU-8",
            "description": "Unicode CESU-8"
          }, {
            "name": "IBM00858",
            "description": "Variant of Cp850 with Euro character"
          }, {
            "name": "IBM437",
            "description": "MS-DOS United States, Australia, New Zealand, South Africa"
          }, {
            "name": "IBM775",
            "description": "PC Baltic"
          }, {
            "name": "IBM850",
            "description": "MS-DOS Latin-1"
          }, {
            "name": "IBM852",
            "description": "MS-DOS Latin-2"
          }, {
            "name": "IBM855",
            "description": "IBM Cyrillic"
          }, {
            "name": "IBM857",
            "description": "IBM Turkish"
          }, {
            "name": "IBM862",
            "description": "PC Hebrew"
          }, {
            "name": "IBM866",
            "description": "MS-DOS Russian"
          }, {
            "name": "ISO-8859-1",
            "description": "ISO-8859-1, Latin Alphabet No. 1"
          }, {
            "name": "ISO-8859-2",
            "description": "Latin Alphabet No. 2"
          }, {
            "name": "ISO-8859-4",
            "description": "Latin Alphabet No. 4"
          }, {
            "name": "ISO-8859-5",
            "description": "Latin/Cyrillic Alphabet"
          }, {
            "name": "ISO-8859-7",
            "description": "Latin/Greek Alphabet (ISO-8859-7:2003)"
          }, {
            "name": "ISO-8859-9",
            "description": "Latin Alphabet No. 5"
          }, {
            "name": "ISO-8859-13",
            "description": "Latin Alphabet No. 7"
          }, {
            "name": "ISO-8859-15",
            "description": "Latin Alphabet No. 9"
          }, {
            "name": "KOI8-R",
            "description": "KOI8-R, Russian"
          }, {
            "name": "KOI8-U",
            "description": "KOI8-U, Ukrainian"
          }, {
            "name": "US-ASCII",
            "description": "American Standard Code for Information Interchange"
          }, {
            "name": "UTF-8",
            "description": "Eight-bit Unicode (or UCS) Transformation Format"
          }, {
            "name": "UTF-16",
            "description": "Sixteen-bit Unicode (or UCS) Transformation Format, byte order identified by an optional byte-order mark"
          }, {
            "name": "UTF-16BE",
            "description": "Sixteen-bit Unicode (or UCS) Transformation Format, big-endian byte order"
          }, {
            "name": "UTF-16LE",
            "description": "Sixteen-bit Unicode (or UCS) Transformation Format, little-endian byte order"
          }, {
            "name": "UTF-32",
            "description": "32-bit Unicode (or UCS) Transformation Format, byte order identified by an optional byte-order mark"
          }, {
            "name": "UTF-32BE",
            "description": "32-bit Unicode (or UCS) Transformation Format, big-endian byte order"
          }, {
            "name": "UTF-32LE",
            "description": "32-bit Unicode (or UCS) Transformation Format, little-endian byte order"
          }, {
            "name": "x-UTF-32BE-BOM",
            "description": "32-bit Unicode (or UCS) Transformation Format, big-endian byte order, with byte-order mark"
          }, {
            "name": "x-UTF-32LE-BOM",
            "description": "32-bit Unicode (or UCS) Transformation Format, little-endian byte order, with byte-order mark"
          }, {
            "name": "windows-1250",
            "description": "Windows Eastern European"
          }, {
            "name": "windows-1251",
            "description": "Windows Cyrillic"
          }, {
            "name": "windows-1252",
            "description": "Windows Latin-1"
          }, {
            "name": "windows-1253",
            "description": "Windows Greek"
          }, {
            "name": "windows-1254",
            "description": "Windows Turkish"
          }, {
            "name": "windows-1257",
            "description": "Windows Baltic"
          }, {
            "name": "x-IBM737",
            "description": "PC Greek"
          }, {
            "name": "x-IBM874",
            "description": "IBM Thai"
          }, {
            "name": "x-UTF-16LE-BOM",
            "description": "Sixteen-bit Unicode (or UCS) Transformation Format, little-endian byte order, with byte-order mark"
          }, {
            "name": "Big5",
            "description": "Big5, Traditional Chinese"
          }, {
            "name": "Big5-HKSCS",
            "description": "Big5 with Hong Kong extensions, Traditional Chinese (incorporating 2001 revision)"
          }, {
            "name": "EUC-JP",
            "description": "JISX 0201, 0208 and 0212, EUC encoding Japanese"
          }, {
            "name": "EUC-KR",
            "description": "KS C 5601, EUC encoding, Korean"
          }, {
            "name": "GB18030",
            "description": "Simplified Chinese, PRC standard"
          }, {
            "name": "GB2312",
            "description": "GB2312, EUC encoding, Simplified Chinese"
          }, {
            "name": "GBK",
            "description": "GBK, Simplified Chinese"
          }, {
            "name": "IBM-Thai",
            "description": "IBM Thailand extended SBCS"
          }, {
            "name": "IBM01140",
            "description": "Variant of Cp037 with Euro character"
          }, {
            "name": "IBM01141",
            "description": "Variant of Cp273 with Euro character"
          }, {
            "name": "IBM01142",
            "description": "Variant of Cp277 with Euro character"
          }, {
            "name": "IBM01143",
            "description": "Variant of Cp278 with Euro character"
          }, {
            "name": "IBM01144",
            "description": "Variant of Cp280 with Euro character"
          }, {
            "name": "IBM01145",
            "description": "Variant of Cp284 with Euro character"
          }, {
            "name": "IBM01146",
            "description": "Variant of Cp285 with Euro character"
          }, {
            "name": "IBM01147",
            "description": "Variant of Cp297 with Euro character"
          }, {
            "name": "IBM01148",
            "description": "Variant of Cp500 with Euro character"
          }, {
            "name": "IBM01149",
            "description": "Variant of Cp871 with Euro character"
          }, {
            "name": "IBM037",
            "description": "USA, Canada (Bilingual, French), Netherlands, Portugal, Brazil, Australia"
          }, {
            "name": "IBM1026",
            "description": "IBM Latin-5, Turkey"
          }, {
            "name": "IBM1047",
            "description": "Latin-1 character set for EBCDIC hosts"
          }, {
            "name": "IBM273",
            "description": "IBM Austria, Germany"
          }, {
            "name": "IBM277",
            "description": "IBM Denmark, Norway"
          }, {
            "name": "IBM278",
            "description": "IBM Finland, Sweden"
          }, {
            "name": "IBM280",
            "description": "IBM Italy"
          }, {
            "name": "IBM284",
            "description": "IBM Catalan/Spain, Spanish Latin America"
          }, {
            "name": "IBM285",
            "description": "IBM United Kingdom, Ireland"
          }, {
            "name": "IBM290",
            "description": "IBM Japanese Katakana Host Extended SBCS"
          }, {
            "name": "IBM297",
            "description": "IBM France"
          }, {
            "name": "IBM420",
            "description": "IBM Arabic"
          }, {
            "name": "IBM424",
            "description": "IBM Hebrew"
          }, {
            "name": "IBM500",
            "description": "EBCDIC 500V1"
          }, {
            "name": "IBM860",
            "description": "MS-DOS Portuguese"
          }, {
            "name": "IBM861",
            "description": "MS-DOS Icelandic"
          }, {
            "name": "IBM863",
            "description": "MS-DOS Canadian French"
          }, {
            "name": "IBM864",
            "description": "PC Arabic"
          }, {
            "name": "IBM865",
            "description": "MS-DOS Nordic"
          }, {
            "name": "IBM868",
            "description": "MS-DOS Pakistan"
          }, {
            "name": "IBM869",
            "description": "IBM Modern Greek"
          }, {
            "name": "IBM870",
            "description": "IBM Multilingual Latin-2"
          }, {
            "name": "IBM871",
            "description": "IBM Iceland"
          }, {
            "name": "IBM918",
            "description": "IBM Pakistan (Urdu)"
          }, {
            "name": "ISO-2022-JP",
            "description": "JIS X 0201, 0208, in ISO 2022 form, Japanese"
          }, {
            "name": "ISO-2022-JP-2",
            "description": "JIS X 0201, 0208, 0212 in ISO 2022 form, Japanese"
          }, {
            "name": "ISO-2022-KR",
            "description": "ISO 2022 KR, Korean"
          }, {
            "name": "ISO-8859-3",
            "description": "Latin Alphabet No. 3"
          }, {
            "name": "ISO-8859-6",
            "description": "Latin/Arabic Alphabet"
          }, {
            "name": "ISO-8859-8",
            "description": "Latin/Hebrew Alphabet"
          }, {
            "name": "JIS_X0201",
            "description": "JIS X 0201"
          }, {
            "name": "JIS_X0212-1990",
            "description": "JIS X 0212"
          }, {
            "name": "Shift_JIS",
            "description": "Shift-JIS, Japanese"
          }, {
            "name": "TIS-620",
            "description": "TIS620, Thai"
          }, {
            "name": "windows-1255",
            "description": "Windows Hebrew"
          }, {
            "name": "windows-1256",
            "description": "Windows Arabic"
          }, {
            "name": "windows-1258",
            "description": "Windows Vietnamese"
          }, {
            "name": "windows-31j",
            "description": "Windows Japanese"
          }, {
            "name": "x-Big5-Solaris",
            "description": "Big5 with seven additional Hanzi ideograph character mappings for the Solaris zh_TW.BIG5 locale"
          }, {
            "name": "x-euc-jp-linux",
            "description": "JISX 0201, 0208, EUC encoding Japanese"
          }, {
            "name": "x-EUC-TW",
            "description": "CNS11643 (Plane 1-7,15), EUC encoding, Traditional Chinese"
          }, {
            "name": "x-eucJP-Open",
            "description": "JISX 0201, 0208, 0212, EUC encoding Japanese"
          }, {
            "name": "x-IBM1006",
            "description": "IBM AIX Pakistan (Urdu)"
          }, {
            "name": "x-IBM1025",
            "description": "IBM Multilingual Cyrillic: Bulgaria, Bosnia, Herzegovinia, Macedonia (FYR)"
          }, {
            "name": "x-IBM1046",
            "description": "IBM Arabic - Windows"
          }, {
            "name": "x-IBM1097",
            "description": "IBM Iran (Farsi)/Persian"
          }, {
            "name": "x-IBM1098",
            "description": "IBM Iran (Farsi)/Persian (PC)"
          }, {
            "name": "x-IBM1112",
            "description": "IBM Latvia, Lithuania"
          }, {
            "name": "x-IBM1122",
            "description": "IBM Estonia"
          }, {
            "name": "x-IBM1123",
            "description": "IBM Ukraine"
          }, {
            "name": "x-IBM1124",
            "description": "IBM AIX Ukraine"
          }, {
            "name": "x-IBM1166",
            "description": "IBM Cyrillic Multilingual with euro for Kazakhstan"
          }, {
            "name": "x-IBM1364",
            "description": "IBM EBCDIC KS X 1005-1"
          }, {
            "name": "x-IBM1381",
            "description": "IBM OS/2, DOS People's Republic of China (PRC)"
          }, {
            "name": "x-IBM1383",
            "description": "IBM AIX People's Republic of China (PRC)"
          }, {
            "name": "x-IBM300",
            "description": "IBM Japanese Latin Host Double-Byte"
          }, {
            "name": "x-IBM33722",
            "description": "IBM-eucJP - Japanese (superset of 5050)"
          }, {
            "name": "x-IBM833",
            "description": "IBM Korean Host Extended SBCS"
          }, {
            "name": "x-IBM834",
            "description": "IBM EBCDIC DBCS-only Korean"
          }, {
            "name": "x-IBM856",
            "description": "IBM Hebrew"
          }, {
            "name": "x-IBM875",
            "description": "IBM Greek"
          }, {
            "name": "x-IBM921",
            "description": "IBM Latvia, Lithuania (AIX, DOS)"
          }, {
            "name": "x-IBM922",
            "description": "IBM Estonia (AIX, DOS)"
          }, {
            "name": "x-IBM930",
            "description": "Japanese Katakana-Kanji mixed with 4370 UDC, superset of 5026"
          }, {
            "name": "x-IBM933",
            "description": "Korean Mixed with 1880 UDC, superset of 5029"
          }, {
            "name": "x-IBM935",
            "description": "Simplified Chinese Host mixed with 1880 UDC, superset of 5031"
          }, {
            "name": "x-IBM937",
            "description": "Traditional Chinese Host miexed with 6204 UDC, superset of 5033"
          }, {
            "name": "x-IBM939",
            "description": "Japanese Latin Kanji mixed with 4370 UDC, superset of 5035"
          }, {
            "name": "x-IBM942",
            "description": "IBM OS/2 Japanese, superset of Cp932"
          }, {
            "name": "x-IBM942C",
            "description": "Variant of Cp942"
          }, {
            "name": "x-IBM943",
            "description": "IBM OS/2 Japanese, superset of Cp932 and Shift-JIS"
          }, {
            "name": "x-IBM943C",
            "description": "Variant of Cp943"
          }, {
            "name": "x-IBM948",
            "description": "OS/2 Chinese (Taiwan) superset of 938"
          }, {
            "name": "x-IBM949",
            "description": "PC Korean"
          }, {
            "name": "x-IBM949C",
            "description": "Variant of Cp949"
          }, {
            "name": "x-IBM950",
            "description": "PC Chinese (Hong Kong, Taiwan)"
          }, {
            "name": "x-IBM964",
            "description": "AIX Chinese (Taiwan)"
          }, {
            "name": "x-IBM970",
            "description": "AIX Korean"
          }, {
            "name": "x-ISCII91",
            "description": "ISCII91 encoding of Indic scripts"
          }, {
            "name": "x-iso-8859-11",
            "description": "Latin/Thai Alphabet"
          }, {
            "name": "x-JIS0208",
            "description": "JIS X 0208"
          }, {
            "name": "x-Johab",
            "description": "Korean, Johab character set"
          }, {
            "name": "x-MacArabic",
            "description": "Macintosh Arabic"
          }, {
            "name": "x-MacCentralEurope",
            "description": "Macintosh Latin-2"
          }, {
            "name": "x-MacCroatian",
            "description": "Macintosh Croatian"
          }, {
            "name": "x-MacCyrillic",
            "description": "Macintosh Cyrillic"
          }, {
            "name": "x-MacDingbat",
            "description": "Macintosh Dingbat"
          }, {
            "name": "x-MacGreek",
            "description": "Macintosh Greek"
          }, {
            "name": "x-MacHebrew",
            "description": "Macintosh Hebrew"
          }, {
            "name": "x-MacIceland",
            "description": "Macintosh Iceland"
          }, {
            "name": "x-MacRoman",
            "description": "Macintosh Roman"
          }, {
            "name": "x-MacRomania",
            "description": "Macintosh Romania"
          }, {
            "name": "x-MacSymbol",
            "description": "Macintosh Symbol"
          }, {
            "name": "x-MacThai",
            "description": "Macintosh Thai"
          }, {
            "name": "x-MacTurkish",
            "description": "Macintosh Turkish"
          }, {
            "name": "x-MacUkraine",
            "description": "Macintosh Ukraine"
          }, {
            "name": "x-MS932_0213",
            "description": "Shift_JISX0213 Windows MS932 Variant"
          }, {
            "name": "x-MS950-HKSCS",
            "description": "Windows Traditional Chinese with Hong Kong extensions"
          }, {
            "name": "x-MS950-HKSCS-XP",
            "description": "HKSCS Windows XP Variant"
          }, {
            "name": "x-mswin-936",
            "description": "Windows Simplified Chinese"
          }, {
            "name": "x-PCK",
            "description": "Solaris version of Shift_JIS"
          }, {
            "name": "x-SJIS_0213",
            "description": "Shift_JISX0213"
          }, {
            "name": "x-windows-50220",
            "description": "Windows Codepage 50220 (7-bit implementation)"
          }, {
            "name": "x-windows-50221",
            "description": "Windows Codepage 50221 (7-bit implementation)"
          }, {
            "name": "x-windows-874",
            "description": "Windows Thai"
          }, {
            "name": "x-windows-949",
            "description": "Windows Korean"
          }, {
            "name": "x-windows-950",
            "description": "Windows Traditional Chinese"
          }, {
            "name": "x-windows-iso2022jp",
            "description": "Variant ISO-2022-JP (MS932 based)"
          }
        ];
      } else if (p_ === 2) {
        this.asciiData = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz*-.@_";
      }
    }

    EncodeApp.prototype.GetCharset = function(blob_) {
      var orgBytes;
      if (blob_.toString() !== "Blob" || typeof blob_ !== "object") {
        throw new Error("No inputted blob.");
      }
      orgBytes = blob_.getBytes();
      return this.charsets.filter(function(e) {
        var tempBlob, tempBytes;
        tempBlob = getBlob.call(this, blob_.getDataAsString(e.name), e.name);
        tempBytes = tempBlob.getBytes();
        return orgBytes.every(function(f, j) {
          return f === tempBytes[j];
        });
      });
    };

    EncodeApp.prototype.EncodeURIWithCharset = function(obj_) {
      var blob;
      if (!obj_) {
        throw new Error("No inputted object.");
      }
      if (!obj_.text) {
        throw new Error("No inputted text.");
      }
      if (!obj_.charset) {
        obj_.charset = "UTF-8";
      }
      blob = getBlob.call(this, obj_.text, obj_.charset);
      return {
        encodedType1: encodedType1.call(this, blob),
        encodedType2: encodedType2.call(this, blob),
        blob: blob,
        charset: obj_.charset
      };
    };

    encodedType1 = function(blob) {
      var value;
      value = blob.getBytes().map(function(e) {
        return "%" + ("0" + (e & 0xFF).toString(16)).slice(-2);
      });
      return value.join("").toUpperCase();
    };

    encodedType2 = function(blob) {
      var bytes, conv, res;
      conv = Utilities.newBlob(this.asciiData).getBytes().map(function(e) {
        return ("0" + (e & 0xFF).toString(16)).slice(-2);
      });
      bytes = blob.getBytes();
      res = bytes.map(function(e) {
        var n;
        n = ("0" + (e & 0xFF).toString(16)).slice(-2);
        if (conv.indexOf(n) !== -1) {
          return String.fromCharCode(parseInt(n[0], 16).toString(2).length === 4 ? parseInt(n, 16) - 256 : parseInt(n, 16));
        } else {
          return ("%" + n).toUpperCase();
        }
      });
      return res.join("");
    };

    getBlob = function(data, charset) {
      return Utilities.newBlob("").setDataFromString(data, charset);
    };

    return EncodeApp;

  })();
  return r.EncodeApp = EncodeApp;
})(this);
