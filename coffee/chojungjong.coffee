# © 2021-2022 Sanha, all rights reserved.

CHOSUNG = [
  'ㄱ'
  'ㄲ'
  'ㄴ'
  'ㄷ'
  'ㄸ'
  'ㄹ'
  'ㅁ'
  'ㅂ'
  'ㅃ'
  'ㅅ'
  'ㅆ'
  'ㅇ'
  'ㅈ'
  'ㅉ'
  'ㅊ'
  'ㅋ'
  'ㅌ'
  'ㅍ'
  'ㅎ'
]
JUNGSUNG = [
  'ㅏ'
  'ㅐ'
  'ㅑ'
  'ㅒ'
  'ㅓ'
  'ㅔ'
  'ㅕ'
  'ㅖ'
  'ㅗ'
  'ㅘ'
  'ㅙ'
  'ㅚ'
  'ㅛ'
  'ㅜ'
  'ㅝ'
  'ㅞ'
  'ㅟ'
  'ㅠ'
  'ㅡ'
  'ㅢ'
  'ㅣ'
]
JONGSUNG = [
  ''
  'ㄱ'
  'ㄲ'
  'ㄳ'
  'ㄴ'
  'ㄵ'
  'ㄶ'
  'ㄷ'
  'ㄹ'
  'ㄺ'
  'ㄻ'
  'ㄼ'
  'ㄽ'
  'ㄾ'
  'ㄿ'
  'ㅀ'
  'ㅁ'
  'ㅂ'
  'ㅄ'
  'ㅅ'
  'ㅆ'
  'ㅇ'
  'ㅈ'
  'ㅊ'
  'ㅋ'
  'ㅌ'
  'ㅍ'
  'ㅎ'
]

sep = (letter, option) ->
  k = letter.charCodeAt() - 44032
  cho = undefined
  jung = undefined
  jong = undefined
  i = 1
  while i <= 19
    if k < i * 21 * 28
      k -= (i - 1) * 21 * 28
      j = 1
      while j <= 21
        if k < j * 28
          k -= (j - 1) * 28
          cho = i - 1
          jung = j - 1
          jong = k
          break
        j++
      break
    i++
  [
    CHOSUNG[cho]
    JUNGSUNG[jung]
    JONGSUNG[jong]
  ]

sfa = (word, option) ->
  word.split('').map (el) ->
    sep el

con = (frag, option) ->
  icho = CHOSUNG.indexOf(frag[0])
  ijung = JUNGSUNG.indexOf(frag[1])
  ijong = if frag[2] then JONGSUNG.indexOf(frag[2]) else 0
  cc = 44032 + icho * 21 * 28 + ijung * 28 + ijong
  String.fromCharCode cc

cfa = (fragArray, option) ->
  fragArray.map((el) ->
    con el
  ).join ''

cfs = (fragString, option) ->
  b = fragString.split('').map((el) ->
    Number JUNGSUNG.includes(el)
  ).join('').replace(/00/g, '0||0').split('||').map((el) ->
    if el.length > 3 then el.replace(/10/g, '1||0') else el
  ).join('||').replace(/\|\|0$/, '0').split('||').map((el) ->
    el.length
  )
  result = String()
  fsc = String(fragString)
  for i of b
    v = b[i]
    result += con(fsc.slice(0, v).split(''))
    fsc = fsc.slice(v)
  result

module.exports =
  separate: sep
  sfs: sfa
  concat: con
  cfa: cfa
  cfs: cfs
