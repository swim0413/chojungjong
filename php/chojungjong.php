<?php

/*
© 2021-2022 sanha1229, all rights reserved.
*/

$CHOSUNG = array(
  'ㄱ', 'ㄲ', 'ㄴ',
  'ㄷ', 'ㄸ', 'ㄹ',
  'ㅁ', 'ㅂ', 'ㅃ',
  'ㅅ', 'ㅆ', 'ㅇ',
  'ㅈ', 'ㅉ', 'ㅊ',
  'ㅋ', 'ㅌ', 'ㅍ',
  'ㅎ'
);
  
$JUNGSUNG = array(
  'ㅏ', 'ㅐ', 'ㅑ',
  'ㅒ', 'ㅓ', 'ㅔ',
  'ㅕ', 'ㅖ', 'ㅗ',
  'ㅘ', 'ㅙ', 'ㅚ',
  'ㅛ', 'ㅜ', 'ㅝ',
  'ㅞ', 'ㅟ', 'ㅠ',
  'ㅡ', 'ㅢ', 'ㅣ'
);

$JONGSUNG = array(
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
);

function uec($ch) {
    return hexdec(substr(json_encode($ch), 3, -1));
}

function udc($n) {
    return json_decode(sprintf('"\\u%s"', dechex($n)));
}

function cjj_sep ($letter) {
    $k = uec($letter) - 44032;
    $cho = 0;
    $jung = 0;
    $jong = 0;
    for ($i = 1; $i <= 19; $i++) {
        if ($k < $i*21*28) {
            $k -= ($i-1)*21*28;
            for ($j = 1; $j <= 21; $j++) {
                if ($k < $j*28) {
                    $k -= ($j-1)*28;
                    $cho = $i-1;
                    $jung = $j-1;
                    $jong = $k;
                    break;
                }
            }
            break;
        }
    }
    global $CHOSUNG;
    global $JUNGSUNG;
    global $JONGSUNG;

    return array($CHOSUNG[$cho], $JUNGSUNG[$jung], $JONGSUNG[$jong]);
}

function cjj_sfa ($word) {
    $res = array();
    for ($i = 0; $i < mb_strlen($word); $i++) {
        array_push($res, cjj_sep(mb_substr($word, $i, 1)));
    }
    return $res;
}

function cjj_con ($frag) {
    global $CHOSUNG;
    global $JUNGSUNG;
    global $JONGSUNG;
    
    $icho = array_search($frag[0], $CHOSUNG);
    $ijung = array_search($frag[1], $JUNGSUNG);
    $ijong = 0;
    if (sizeof($frag) == 3) {
        $ijong = array_search($frag[2], $JONGSUNG);
    }
  
    $cc = 44032+$icho*21*28+$ijung*28+$ijong;
    return udc($cc);
}

function cjj_cfa ($fragArray) {
    $res = '';
    foreach ($fragArray as $frag) {
        $res = $res.cjj_con($frag);
    }
    return $res;
}
