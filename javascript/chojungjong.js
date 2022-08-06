/*
© 2021-2022 sanha1229, all rights reserved.
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

function sep (letter) {
  let k = letter.charCodeAt() - 44032;
  let cho, jung, jong;
  for (let i = 1; i < 20; i++) {
    if (k < i*588) {
      k -= (i-1)*588;
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

function sfa (word) {
  return word.split('').map(el => sep(el));
}

function con(frag) {
  let icho = CHOSUNG.indexOf(frag[0]);
  let ijung = JUNGSUNG.indexOf(frag[1]);
  let ijong = frag[2] ? JONGSUNG.indexOf(frag[2]) : 0;
  
  let cc = 44032+icho*588+ijung*28+ijong;
  return String.fromCharCode(cc);
}

function cfa (fragArray) {
  return fragArray.map(el => con(el)).join('');
}

let reg = /01(0(?=0))?/g;

function cfs(str) {
  let result = '', i = 0;
  let tem = str.split('');
  for (let v of tem.map(v => JUNGSUNG.indexOf(v) !== -1|0).join('').match(reg)) {
    result += con(tem.slice(i, i+=v.length));
  }
  return result;
}

module.exports = {
  separate: sep,
  sfs: sfa,
  concat: con,
  cfa: cfa,
  cfs: cfs
};
