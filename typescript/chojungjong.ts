/*
© 2021-2022 Green, all rights reserved.
*/

export const CHOSUNG = [
  'ㄱ', 'ㄲ', 'ㄴ',
  'ㄷ', 'ㄸ', 'ㄹ',
  'ㅁ', 'ㅂ', 'ㅃ',
  'ㅅ', 'ㅆ', 'ㅇ',
  'ㅈ', 'ㅉ', 'ㅊ',
  'ㅋ', 'ㅌ', 'ㅍ',
  'ㅎ'
];
  
export const JUNGSUNG = [
  'ㅏ', 'ㅐ', 'ㅑ',
  'ㅒ', 'ㅓ', 'ㅔ',
  'ㅕ', 'ㅖ', 'ㅗ',
  'ㅘ', 'ㅙ', 'ㅚ',
  'ㅛ', 'ㅜ', 'ㅝ',
  'ㅞ', 'ㅟ', 'ㅠ',
  'ㅡ', 'ㅢ', 'ㅣ'
];

export const JONGSUNG = [
  '', 'ㄱ', 'ㄲ',
  'ㄳ', 'ㄴ', 'ㄵ',
  'ㄶ', 'ㄷ', 'ㄹ',
  'ㄺ', 'ㄻ', 'ㄼ',
  'ㄽ', 'ㄾ', 'ㄿ',
  'ㅀ', 'ㅁ', 'ㅂ',
  'ㅄ', 'ㅅ', 'ㅆ',
  'ㅇ', 'ㅈ', 'ㅊ',
  'ㅋ', 'ㅌ', 'ㅍ',
  'ㅎ'
];

export function sep (letter: string): Array<String> {
  let k = letter.charCodeAt(0) - 44032;
  let cho: number, jung: number, jong: number;
  for (let i = 1; i <= 19; i++) {
    if (k < i*21*28) {
      k -= (i-1)*21*28;
      for (let j = 1; j <= 21; j++) {
        if (k < j*28) {
          k -= (j-1)*28;
          cho = i-1, jung = j-1, jong = k;
          break;
        }
      }
      break;
    }
  }
  return [
    CHOSUNG[cho], JUNGSUNG[jung], JONGSUNG[jong]
  ];
}

export function sfa (word: string): Array<Array<String>> {
  return word.split('').map(el => sep(el));
}

export function con (frag: Array<string>): string {
  let icho: number = CHOSUNG.indexOf(frag[0]);
  let ijung: number = JUNGSUNG.indexOf(frag[1]);
  let ijong: number = frag[2] ? JONGSUNG.indexOf(frag[2]) : 0;
  let cc: number = 44032 + icho * 21 * 28 + ijung * 28 + ijong;
  return String.fromCharCode(cc);
}

export function cfa (fragArray: Array<Array<string>>): string {
  return fragArray.map(el => con(el)).join('');
}

export function cfs (fragString: string): string {
  let b = fragString.split('').map(el => Number(JUNGSUNG.includes(el))).join('').replace(/00/g, '0||0').split('||').map(el => el.length > 3 ? el.replace(/10/g, '1||0') : el).join('||').replace(/\|\|0$/, '0').split('||').map(el => el.length);
  let result = String();
  let fsc = String(fragString);
  for (let v of b) {
    result += con(fsc.slice(0, v).split(''));
    fsc = fsc.slice(v);
  }
  return result;
}