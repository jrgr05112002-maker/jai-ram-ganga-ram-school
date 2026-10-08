package com.jrgr.sdet.tests.ui;

import com.jrgr.sdet.base.BaseTest;
import com.jrgr.sdet.config.ConfigReader;
import com.jrgr.sdet.pages.HomePage;
import org.testng.Assert;
import org.testng.annotations.Test;

public class HomePageTest extends BaseTest {

    @Test(description = "Verify school home page title")
    public void verifyPageTitle() {
        HomePage homePage = new HomePage(driver).open(ConfigReader.get("ui.base.url"));

        Assert.assertEquals(
                homePage.getTitle(),
                "Shri Jai Ram Ganga Ram Smart School"
        );
    }

    @Test(description = "Verify education society section and all member cards")
    public void verifySocietyMembers() {
        HomePage homePage = new HomePage(driver).open(ConfigReader.get("ui.base.url"));

        Assert.assertTrue(homePage.isSocietySectionDisplayed());
        Assert.assertEquals(homePage.getSocietyMemberCount(), 7);
        Assert.assertTrue(homePage.hasHorizontalSocietyScroll(),
                "Society cards should be horizontally scrollable");
    }
}
