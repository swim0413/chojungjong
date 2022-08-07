# chojungjong C#

## Copyright
© 2022 swim0413, all rights reserved.

## Author
[swim0413](https://github.com/swim0413)

## How-to-use

### 분리

#### separate
```cs
cjj.separate("쀍").ToList().ForEach(Console.WriteLine);
```

#### sfa
```cs
for(int i = 0; i < word.Split(" ").Length; i++)
{
    for(int j =0; j < cjj.separate(word.Split(" ")[i]).Length; j++)
    {
        Console.WriteLine(cjj.sfa(word)[i][j]);
    }
}
```

### 결합

#### concat
```cs
Console.WriteLine(cjj.concat(new string[] { "ㅅ", "ㅐ", "ㄴ" }));
```

#### cfa
```cs
Console.WriteLine(cjj.cfa(new List<string[]> { new string[] { "ㅅ", "ㅜ" }, new string[] { "ㅇ", "ㅕ", "ㅇ" }, new string[] { "ㅇ", "ㅏ" } }));
```

#### <del>cfs</del> (미구현)
```cs
cjj.cfs()
```
