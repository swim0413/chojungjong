/*
© 2021 Sanha, all rights reserved.
License: CCL BY-NC 4.0
*/

const CHOSUNG = [
  'ㄱ', 'ㄲ', 'ㄴ',
  'ㄷ', 'ㄸ', 'ㄹ',
  'ㅁ', 'ㅂ', 'ㅃ',
  'ㅅ', 'ㅆ', 'ㅇ',
  'ㅈ', 'ㅉ', 'ㅊ',
  'ㅋ', 'ㅌ', 'ㅍ',
  'ㅎ'
];
  
const JUNGSUNG = [
  'ㅏ', 'ㅐ', 'ㅑ',
  'ㅒ', 'ㅓ', 'ㅔ',
  'ㅕ', 'ㅖ', 'ㅗ',
  'ㅘ', 'ㅙ', 'ㅚ',
  'ㅛ', 'ㅜ', 'ㅝ',
  'ㅞ', 'ㅟ', 'ㅠ',
  'ㅡ', 'ㅢ', 'ㅣ'
];

const JONGSUNG = [
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

function sep (letter, option) {
  let k = letter.charCodeAt() - 44032;
  let cho, jung, jong;
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

function con (frag, option) {
  let icho = CHOSUNG.indexOf(frag[0]);
  let ijung = JUNGSUNG.indexOf(frag[1]);
  let ijong = JONGSUNG.indexOf(frag[2]);
  
  let cc = 44032+icho*21*28+ijung*28+ijong;
  return String.fromCharCode(cc);
}

module.exports = {
  separate: sep,
  concat: con
};
