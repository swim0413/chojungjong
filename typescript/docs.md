# chojungjong TypeScript

## Copyright
© 2021-2022 sanha1229 & F1N2, all rights reserved.

## Author
[F1N2](https://github.com/F1N2)

## How-to-use

### 시작하기

#### 모듈 불러오기
```typescript
import * as cjj from 'PATH';
```

### 분리

#### sep(letter: string)
sep는 **separate**의 줄임말로, 이 함수는 한글 한 글자를 매개변수로 받아서 초성, 중성, 종성으로 분리한 배열을 반환합니다.
<br><strong>이때, 'ㅇ'도 초성으로 취급됩니다.</strong>
```typescript
cjj.sep('와'); // [ "ㅇ", "ㅗ", "ㅏ" ] 
cjj.sep('우'); // [ "ㅇ", "ㅜ", "" ]
```

#### sfa(word: string)
sfa는 **s**eparate into **f**ragment **a**rray의 줄임말로, 이 함수는 한글 여러 글자를 매개변수로 받아서 초성, 중성, 종성으로 분리한 배열의 배열을 반환합니다. 
<br>**이때, 'ㅇ'도 초성으로 취급됩니다.**
```typescript
cjj.sfs('안녕'); // [ [ "ㅇ", "ㅏ", "ㄴ" ], [ "ㄴ", "ㅕ", "ㅇ" ] ]
```

### 결합

#### con(frag: Array\<string\>)
con는 **concat**의 줄임말로, 이 함수는 초성, 중성, 종성이 담긴 배열을 매개변수로 받아서 한 글자로 결합한 문자열을 반환합니다.
<br>**이때, 초성이 없을 경우에는 대신 'ㅇ'을 사용해야합니다.**
```typescript
cjj.con(['ㄱ', 'ㅜ', 'ㄱ']); // "국"
cjj.con(['ㅇ', 'ㅓ']); // "어"
```

#### cfa(fragment: Array\<Array\<string\>\>)
cfa는 **c**oncatenate **f**ragment **a**rray의 줄임말로, 이 함수는 초성, 중성, 종성이 담긴 배열들의 배열을 매개변수로 받아서 각각 결합한 문자열을 반환합니다.
<br>**이때, 초성이 없을 경우에는 대신 'ㅇ'을 사용해야합니다.**
```typescript
cjj.cfa([['ㅎ', 'ㅏ', 'ㄴ'], ['ㄱ', 'ㅡ', 'ㄹ']]); // "한글"
```

#### cfs(fragString: string)
cfs는 **c**oncatenate **f**ragment **s**tring의 줄임말로, 이 함수는 초성, 중성, 종성이 분리된 상태의 문자열을 매개변수로 받아서 각각 결합한 문자열을 반환합니다.
<br>**이때, 초성이 없을 경우에는 대신 'ㅇ'을 사용해야합니다.**
```typescript
cjj.cfs('ㅇㅏㄴㄴㅕㅇㅎㅏㅅㅔㅇㅛ'); // "안녕하세요"
```
