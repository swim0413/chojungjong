# chojungjong
한글 초성, 중성, 종성 분리

## Copyright
©️ 2021 Sanha, all rights reserved.

## License
소스코드 파일에 표기되어있음.

## How to Use

### Get Started
```javascript
const cjj = require(PATH);
```

### separate(letter: string)
```javascript
cjj.separate('와'); // [ "ㅇ", "ㅗ", "ㅏ" ]
cjj.separate('우'); // [ "ㅇ", "ㅜ", "" ]

