using Chojungjong;

//concat => 한음절
Console.WriteLine(cjj.concat(new string[] { "ㅅ", "ㅐ", "ㄴ" }));

//cfa => 여러 음절
Console.WriteLine(cjj.cfa(new List<string[]> { new string[] { "ㅅ", "ㅜ" }, new string[] { "ㅇ", "ㅕ", "ㅇ" }, new string[] { "ㅇ", "ㅏ" } }));

//separate => 한음절
cjj.separate("쀍").ToList().ForEach(Console.WriteLine);

//sfa => 여러 음절
String word = "안 녕"; //음절 단위 뛰어적기
for(int i = 0; i < word.Split(" ").Length; i++)
{
    for(int j =0; j < cjj.separate(word.Split(" ")[i]).Length; j++)
    {
        Console.WriteLine(cjj.sfa(word)[i][j]);
    }
}