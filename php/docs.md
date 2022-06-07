
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

#### cjj_sep($letter: string)
cjj_sep 함수는 한글 한 글자를 매개변수로 받아서 초성, 중성, 종성으로 분리한 배열을 반환합니다.
<br><strong>이때, 'ㅇ'도 초성으로 취급됩니다.</strong>
```php
cjj_sep('와'); // array( 0 => "ㅇ", 1 => "ㅘ", 2 => "" )
cjj_sep('우'); // array( 0 => "ㅇ", 1 => "ㅜ", 2 => "" )
```

#### cjj_sfa($word: string)
cjj_sfa는 **s**eparate into **f**ragment **a**rray의 줄임말로, 이 함수는 한글 여러 글자를 매개변수로 받아서 초성, 중성, 종성으로 분리한 배열의 배열을 반환합니다. 
<br>**이때, 'ㅇ'도 초성으로 취급됩니다.**
```php
cjj_sfa('안녕');
/*
array( 0 =>
    array( 0 => "ㅇ", 1 => "ㅏ", 2 => "ㄴ" )
    array( 0 => "ㄴ", 1 => "ㅕ", 2 => "ㅇ" )
)
*/
```

### 결합

#### cjj_con($frag: array)
cjj_con 함수는 초성, 중성, 종성이 담긴 배열을 매개변수로 받아서 한 글자로 결합한 문자열을 반환합니다.
<br>**이때, 초성이 없을 경우에는 대신 'ㅇ'을 사용해야합니다.**
```php
cjj.con(array('ㄱ', 'ㅜ', 'ㄱ')); // "국"
cjj.con(array('ㅇ', 'ㅓ')); // "어"
```

#### cjj_cfa($fragment: array)
cjj_cfa는 **c**oncatenate **f**ragment **a**rray의 줄임말로, 이 함수는 초성, 중성, 종성이 담긴 배열들의 배열을 매개변수로 받아서 각각 결합한 문자열을 반환합니다.
<br>**이때, 초성이 없을 경우에는 대신 'ㅇ'을 사용해야합니다.**
```php
cjj_cfa(array(array('ㅎ', 'ㅏ', 'ㄴ'), array('ㄱ', 'ㅡ', 'ㄹ'))); // "한글"
```

#### 미구현 <del>cfs($fragString: string)</del>
미구현
