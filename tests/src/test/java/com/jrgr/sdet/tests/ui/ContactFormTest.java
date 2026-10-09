
package com.jrgr.sdet.tests.ui;

import com.jrgr.sdet.base.BaseTest;
import com.jrgr.sdet.pages.ContactPage;

import org.testng.Assert;
import org.testng.annotations.Test;

public class ContactFormTest extends BaseTest {

    @Test
    public void submitEnquirySuccessfully() {

        driver.get("http://localhost:5173");

        ContactPage contactPage = new ContactPage(driver);

        contactPage
                .enterName("RAM")
                .enterPhone("9876543210")
                .enterMessage("Testing the school contact form")
                .submit();

        String statusMessage = contactPage.getStatusMessage();

        Assert.assertEquals(
                statusMessage,
                "Thank you! Your enquiry has been submitted.",
                "The contact form should display the success message."
        );
    }
}
