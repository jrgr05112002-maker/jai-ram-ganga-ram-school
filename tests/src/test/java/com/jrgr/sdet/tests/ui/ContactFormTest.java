package com.jrgr.sdet.tests.ui;

import com.jrgr.sdet.base.BaseTest;
import com.jrgr.sdet.config.ConfigReader;
import com.jrgr.sdet.pages.ContactPage;
import com.jrgr.sdet.pages.HomePage;
import com.jrgr.sdet.utils.TestData;
import org.testng.Assert;
import org.testng.annotations.Test;

public class ContactFormTest extends BaseTest {

    @Test(description = "Submit enquiry from school website contact form")
    public void submitEnquirySuccessfully() {
        HomePage homePage = new HomePage(driver).open(ConfigReader.get("ui.base.url"));
        homePage.clickContact();

        String name = TestData.uniqueName("SDET Test");

        ContactPage contactPage = new ContactPage(driver)
                .enterName(name)
                .enterPhone("9876543210")
                .enterMessage("Automated Selenium enquiry test")
                .submit();

        Assert.assertEquals(
                contactPage.getStatusMessage(),
                "Thank you! Your enquiry has been submitted."
        );
    }
}
