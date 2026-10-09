
package com.jrgr.sdet.tests.ui;

import com.jrgr.sdet.pages.ContactPage;
import com.jrgr.sdet.base.BaseTest;

import org.testng.Assert;
import org.testng.annotations.Test;

public class ContactFormTest extends BaseTest {

    @Test
    public void submitEnquirySuccessfully() {

        driver.get("http://localhost:5173");

        ContactPage contactPage = new ContactPage(driver);

        contactPage.enterName("RAM");
        contactPage.enterPhone("9876543210");
        contactPage.enterMessage(
                "Testing the school contact form");

        contactPage.submit();

        String statusMessage = contactPage.getStatusMessage();

        Assert.assertFalse(
                statusMessage.isEmpty(),
                "Expected a visible contact-form status message after submission."
        );

        Assert.assertTrue(
                statusMessage.toLowerCase().contains("success")
                        || statusMessage.toLowerCase().contains("thank")
                        || statusMessage.toLowerCase().contains("submitted"),
                "Expected a successful submission message, but received: "
                        + statusMessage
        );
    }
}
