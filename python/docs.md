# chojungjong Python

## Copyright
© 2021-2022 sanha1229 & everythingisformathieu, all rights reserved.

## Author
[everythingisformathieu](https://github.com/everythingisformathieu)

## How-to-use

### 시작하기
```python
import chojungjong as cjj
```

### 분리

#### separate(letter: string)
```python
cjj.separate('와')
```

#### sfa(word: string)
```python
cjj.sfa('안녕하세요')
```

### 결합

#### con(frag: array)
```python
cjj.con(['ㅇ', 'ㅘ'])
```

#### cfa(fragArray: array)
```python
cjj.cfa([['ㅎ', 'ㅏ', 'ㄴ'], ['ㄱ', 'ㅡ', 'ㄹ']])
```

#### cfs(fragString: string)
```python
cjj.cfs('ㅇㅏㄴㄴㅕㅇㅎㅏㅅㅔㅇㅛ')
```
