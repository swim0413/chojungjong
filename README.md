# chojungjong
한글 초성, 중성, 종성 분리 및 결합 (for JS/Python)

## Copyright
©️ 2021 Sanha, all rights reserved.

## How to Use

### Get Started
```javascript
const cjj = require(PATH);
```

### separate(letter: string)
한글 한 글자를 매개변수로 받아서 초성, 중성, 종성으로 분리한 배열을 리턴.
<br><strong>'ㅇ'도 초성으로 취급</strong>
```javascript
cjj.separate('와'); // [ "ㅇ", "ㅗ", "ㅏ" ]
cjj.separate('우'); // [ "ㅇ", "ㅜ", "" ]
```

### sfs(word: string)
한글 여러 글자를 매개변수로 받아서 초성, 중성, 종성으로 분리한 배열의 배열을 리턴. 
<br><strong>'ㅇ'도 초성으로 취급</strong>
```javascript
cjj.sfs('안녕'); // [ [ "ㅇ", "ㅏ", "ㄴ" ], [ "ㄴ", "ㅕ", "ㅇ" ] ]
```

### concat(frag: array)
초성, 중성, 종성이 담긴 배열을 매개변수로 받아서 한 글자로 결합한 문자열을 리턴함.
<br><strong>'ㅇ'도 초성으로 취급</strong>
```javascript
cjj.concat(['ㄱ', 'ㅜ', 'ㄱ']); // "국"
cjj.concat(['ㅇ', 'ㅓ']); // "어"
```

### cfa(fragArray: array)
초성, 중성, 종성이 담긴 배열들의 배열을 매개변수로 받아서 각각 결합한 문자열을 리턴함.
<br><strong>'ㅇ'도 초성으로 취급</strong>
```javascript
cjj.cfa([['ㅎ', 'ㅏ', 'ㄴ'], ['ㄱ', 'ㅡ', 'ㄹ']]); // "한글"
```

### cfs(fragString: string)
초성, 중성, 종성이 분리된 상태의 문자열을 매개변수로 받아서 각각 결합한 문자열을 리턴함.
<br><strong>'ㅇ'도 초성으로 취급</strong>
```javascript
cjj.cfs('ㅇㅏㄴㄴㅕㅇㅎㅏㅅㅔㅇㅛ'); // "안녕하세요"
```
