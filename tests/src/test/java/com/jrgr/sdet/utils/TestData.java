package com.jrgr.sdet.utils;

import java.time.LocalDateTime;

public final class TestData {
    private TestData() {}

    public static String uniqueName(String prefix) {
        return prefix + " " + LocalDateTime.now().toString().replaceAll("[^0-9]", "");
    }
}
