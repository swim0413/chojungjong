/*
© 2021 Sanha, all rights reserved.
*/
package com.github.sweetcorn1229.chojungjong;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.stream.Stream;

public class Chojungjong {

    private final String[] CHOSUNG = {
            "ㄱ", "ㄲ", "ㄴ",
            "ㄷ", "ㄸ", "ㄹ",
            "ㅁ", "ㅂ", "ㅃ",
            "ㅅ", "ㅆ", "ㅇ",
            "ㅈ", "ㅉ", "ㅊ",
            "ㅋ", "ㅌ", "ㅍ",
            "ㅎ"
    };

    private final String[] JUNGSUNG = {
            "ㅏ", "ㅐ", "ㅑ",
            "ㅒ", "ㅓ", "ㅔ",
            "ㅕ", "ㅖ", "ㅗ",
            "ㅘ", "ㅙ", "ㅚ",
            "ㅛ", "ㅜ", "ㅝ",
            "ㅞ", "ㅟ", "ㅠ",
            "ㅡ", "ㅢ", "ㅣ"
    };

    private final String[] JONGSUNG = {
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

    public Chojungjong() {

    }

    public String[] separate(final String letter) {
        int k = (int) letter.charAt(0) - 44032;
        int cho = 0, jung = 0, jong = 0;

        for (int i = 1; i <= 19; i++) {
            if (k < i*21*28) {
                k -= (i-1)*21*28;
                for (int j = 1; j <= 21; j++) {
                    if (k < j*28) {
                        k -= (j-1)*28;
                        cho = i-1;
                        jung = j-1;
                        jong = k;
                        break;
                    }
                }
                break;
            }
        }
        return new String[] {this.CHOSUNG[cho], this.JUNGSUNG[jung], this.JONGSUNG[jong]};
    }

    public Stream<String[]> sfa(final String word) {
        return Arrays.stream(word.split(" ")).map(this::separate);
    }

    public String concat(final String[] frag) {
        int icho = Arrays.binarySearch(this.CHOSUNG, frag[0]);
        int ijung = Arrays.binarySearch(this.JUNGSUNG, frag[1]);
        int ijong = (frag[2] != null) ? Arrays.binarySearch(this.JONGSUNG, frag[2]) : 0;

        int cc = 44032 + icho * 21 * 28 + ijung * 28 + ijong;

        return String.valueOf((char) cc);
    }

    public String cfa(ArrayList<String> fragArray) {

        return null;
    }

    public String cfs(String fragString) {

        return null;
    }
}
