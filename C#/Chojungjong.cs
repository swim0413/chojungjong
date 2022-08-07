using System;
using System.Linq;
using System.IO;
using System.Collections.Generic;
using System.Text;

namespace Chojungjong
{
	public static class cjj
	{

		public static string[] CHOSUNG = new string[] {
				"ㄱ", "ㄲ", "ㄴ",
				"ㄷ", "ㄸ", "ㄹ",
				"ㅁ", "ㅂ", "ㅃ",
				"ㅅ", "ㅆ", "ㅇ",
				"ㅈ", "ㅉ", "ㅊ",
				"ㅋ", "ㅌ", "ㅍ",
				"ㅎ"
			};

		public static string[] JUNGSUNG = new string[] {
				"ㅏ", "ㅐ", "ㅑ",
				"ㅒ", "ㅓ", "ㅔ",
				"ㅕ", "ㅖ", "ㅗ",
				"ㅘ", "ㅙ", "ㅚ",
				"ㅛ", "ㅜ", "ㅝ",
				"ㅞ", "ㅟ", "ㅠ",
				"ㅡ", "ㅢ", "ㅣ"
			};

		public static string[] JONGSUNG = new string[]{
				" ", "ㄱ", "ㄲ",
				"ㄳ", "ㄴ", "ㄵ",
				"ㄶ", "ㄷ", "ㄹ",
				"ㄺ", "ㄻ", "ㄼ",
				"ㄽ", "ㄾ", "ㄿ",
				"ㅀ", "ㅁ", "ㅂ",
				"ㅄ", "ㅅ", "ㅆ",
				"ㅇ", "ㅈ", "ㅊ",
				"ㅋ", "ㅌ", "ㅍ",
				"ㅎ"
			};

		public static string[] separate(string letter)
		{
			int k = (int)letter[0] - 44032;
			int cho = 0, jung = 0, jong = 0;
			for (int i = 1; i <= 19; i++)
			{
				if (k < i * 21 * 28)
				{
					k -= (i - 1) * 21 * 28;
					for (int j = 1; j <= 21; j++)
					{
						if (k < j * 28)
						{
							k -= (j - 1) * 28;
							cho = i - 1;
							jung = j - 1;
							jong = k;
							break;
						}
					}
					break;
				}
			}
			return new string[] { CHOSUNG[cho], JUNGSUNG[jung], JONGSUNG[jong] };
		}

		public static List<string[]> sfa(string word)
		{
			List<string[]> res = new List<string[]> { };
			for (int i = 0; i < word.Split(" ").Length; i++)
			{
				res.Add(separate(word.Split(" ")[i]));
			}
			return res;
		}

		public static string concat(string[] frags)
		{
			int icho = Array.IndexOf(CHOSUNG, frags[0]);
			int ijung = Array.IndexOf(JUNGSUNG, frags[1]);
			int ijong = 0;
			if (frags.Length >= 3)
			{
				ijong = Array.IndexOf(JONGSUNG, frags[2]);
			}
			else
			{
				ijong = 0;
			}
			int cc = 44032 + icho * 21 * 28 + ijung * 28 + ijong;
			return Convert.ToString((char)cc);
		}

		public static string cfa(List<string[]> fragArray)
		{
			StringBuilder sb = new StringBuilder();
			for (int i = 0; i < fragArray.Count; i++)
			{
				sb.Append(concat(fragArray[i]));
			}
			return sb.ToString();
		}
	}
}

