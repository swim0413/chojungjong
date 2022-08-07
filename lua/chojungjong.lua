[[-- © 2021-2022 sanha, all rights reserved. --]]

CHOSUNG = {
  'ㄱ', 'ㄲ', 'ㄴ',
  'ㄷ', 'ㄸ', 'ㄹ',
  'ㅁ', 'ㅂ', 'ㅃ',
  'ㅅ', 'ㅆ', 'ㅇ',
  'ㅈ', 'ㅉ', 'ㅊ',
  'ㅋ', 'ㅌ', 'ㅍ',
  'ㅎ'
};
  
JUNGSUNG = {
  'ㅏ', 'ㅐ', 'ㅑ',
  'ㅒ', 'ㅓ', 'ㅔ',
  'ㅕ', 'ㅖ', 'ㅗ',
  'ㅘ', 'ㅙ', 'ㅚ',
  'ㅛ', 'ㅜ', 'ㅝ',
  'ㅞ', 'ㅟ', 'ㅠ',
  'ㅡ', 'ㅢ', 'ㅣ'
};

JONGSUNG = {
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
};

function string.at(s, i)
  return utf8.char(utf8.codepoint(s, i));
end

function string.ord(s)
  return utf8.codepoint(s);
end

function string.chr(n)
  return utf8.char(n);
end

function sep(letter)
  local k = string.ord(letter) - 44032;
  local cho, jung, jong;
  for i = 1, 19 do
    if k < i*588 then
      k = k - (i-1)*588;
      for j = 1, 21 do
        if k < j*28 then
          k = k - (j-1)*28;
          cho = i;
          jung = j;
          jong = k+1;
          break;
        end
      end
      break;
    end
  end
  return {
    CHOSUNG[cho], JUNGSUNG[jung], JONGSUNG[jong]
  };
end
