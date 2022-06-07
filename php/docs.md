
# chojungjong PHP

## Copyright
© 2021-2022 sanha1229, all rights reserved.

## Author
[sanha1229](https://github.com/sanha1229)

수정중

## How-to-use

### 시작하기

#### 모듈 불러오기
```php
<?php
require_once 'PATH';
```

### 분리

#### cjj_sep(letter: string)
cjj_sep 함수는 한글 한 글자를 매개변수로 받아서 초성, 중성, 종성으로 분리한 배열을 반환합니다.
<br><strong>이때, 'ㅇ'도 초성으로 취급됩니다.</strong>
```php
cjj_sep('와'); // array( 0 => "ㅇ", 1 => "ㅘ", 2 => "" )
cjj_sep('우'); // array( 0 => "ㅇ", 1 => "ㅜ", 2 => "" )
```

#### sfa(word: string)
cjj_sfa는 **s**eparate into **f**ragment **a**rray의 줄임말로, 이 함수는 한글 여러 글자를 매개변수로 받아서 초성, 중성, 종성으로 분리한 배열의 배열을 반환합니다. 
<br>**이때, 'ㅇ'도 초성으로 취급됩니다.**
```php
cjj_sfa('안녕');
/*
array( 0 =>
    array( 0 => "ㅇ", 1 => "ㅏ", 2 => "ㅏ" )
    array( 0 => "ㅇ", 1 => "ㅗ", 2 => "ㅏ" )
```

### 결합

#### concat(frag: array)
concat 함수는 초성, 중성, 종성이 담긴 배열을 매개변수로 받아서 한 글자로 결합한 문자열을 반환합니다.
<br>**이때, 초성이 없을 경우에는 대신 'ㅇ'을 사용해야합니다.**
```javascript
cjj.concat(['ㄱ', 'ㅜ', 'ㄱ']); // "국"
cjj.concat(['ㅇ', 'ㅓ']); // "어"
```

#### cfa(fragment: array)
cfa는 **c**oncatenate **f**ragment **a**rray의 줄임말로, 이 함수는 초성, 중성, 종성이 담긴 배열들의 배열을 매개변수로 받아서 각각 결합한 문자열을 반환합니다.
<br>**이때, 초성이 없을 경우에는 대신 'ㅇ'을 사용해야합니다.**
```javascript
cjj.cfa([['ㅎ', 'ㅏ', 'ㄴ'], ['ㄱ', 'ㅡ', 'ㄹ']]); // "한글"
```

#### cfs(fragString: string)
cfs는 **c**oncatenate **f**ragment **s**tring의 줄임말로, 이 함수는 초성, 중성, 종성이 분리된 상태의 문자열을 매개변수로 받아서 각각 결합한 문자열을 반환합니다.
<br>**이때, 초성이 없을 경우에는 대신 'ㅇ'을 사용해야합니다.**
```javascript
cjj.cfs('ㅇㅏㄴㄴㅕㅇㅎㅏㅅㅔㅇㅛ'); // "안녕하세요"
```
