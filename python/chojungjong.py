import re

CHOSUNG = [
    'ㄱ', 'ㄲ', 'ㄴ',
    'ㄷ', 'ㄸ', 'ㄹ',
    'ㅁ', 'ㅂ', 'ㅃ',
    'ㅅ', 'ㅆ', 'ㅇ',
    'ㅈ', 'ㅉ', 'ㅊ',
    'ㅋ', 'ㅌ', 'ㅍ',
    'ㅎ'
  ]
    
JUNGSUNG = [
    'ㅏ', 'ㅐ', 'ㅑ',
    'ㅒ', 'ㅓ', 'ㅔ',
    'ㅕ', 'ㅖ', 'ㅗ',
    'ㅘ', 'ㅙ', 'ㅚ',
    'ㅛ', 'ㅜ', 'ㅝ',
    'ㅞ', 'ㅟ', 'ㅠ',
    'ㅡ', 'ㅢ', 'ㅣ'
  ]
  
JONGSUNG = [
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
  ]

def sep (letter, option=None):
    k = ord(letter) - 44032
    (cho, jung, jong) = (None, None, None)
    for i in range(1, 20):
      if k < (i*21*28):
        k -= (i-1)*21*28
        for j in range(1, 22):
          if k < j*28:
            k -= (j-1)*28
            cho = i-1
            jung = j-1
            jong = k
            break
        break
    return [CHOSUNG[cho], JUNGSUNG[jung], JONGSUNG[jong]]

def sfa (word, option=None):
    return list(map(sep, list(word)))

def con (frag, option=None):
    icho = CHOSUNG.index(frag[0])
    ijung = JUNGSUNG.index(frag[1])
    if len(frag)>=3:
        ijong = JONGSUNG.index(frag[2])
    else:
        ijong = 0
    cc = 44032+icho*21*28+ijung*28+ijong
    return chr(cc)

def cfa (fragArray, option=None):
    return ''.join(list(map(con, fragArray)))

def cfs (fragString, option=None):
    b = list(map(len, re.sub('\|\|0$','0', '||'.join(list(map(lambda e: e.replace('10', '1||0') if len(e) > 3 else e, ''.join([str(int) for int in list(map(lambda e: int(e in JUNGSUNG), list(fragString)))]).replace('00','0||0').split('||'))))).split('||')))
    result = []
    fsc = str(fragString)
    for v in b:
      result.append(con(list(fsc[0:v])))
      fsc = fsc[v:]
    return ''.join(result)
