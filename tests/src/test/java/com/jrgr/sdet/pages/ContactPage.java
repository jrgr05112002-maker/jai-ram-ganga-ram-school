
package com.jrgr.sdet.pages;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class ContactPage {

    private final WebDriver driver;
    private final WebDriverWait wait;

    private final By nameField =
            By.cssSelector("#contact input[name='name']");

    private final By phoneField =
            By.cssSelector("#contact input[name='phone']");

    private final By messageField =
            By.cssSelector("#contact textarea[name='message']");

    private final By submitButton =
            By.cssSelector("#contact button[type='submit']");

    // Adjust this locator if your frontend uses a different
    // element to display the submission result.
    private final By statusMessage =
            By.cssSelector("#contact .status-message");

    public ContactPage(WebDriver driver) {
        this.driver = driver;
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(15));
    }

    public void enterName(String name) {
        WebElement element = wait.until(
                ExpectedConditions.visibilityOfElementLocated(nameField));
        element.clear();
        element.sendKeys(name);
    }

    public void enterPhone(String phone) {
        WebElement element = wait.until(
                ExpectedConditions.visibilityOfElementLocated(phoneField));
        element.clear();
        element.sendKeys(phone);
    }

    public void enterMessage(String message) {
        WebElement element = wait.until(
                ExpectedConditions.visibilityOfElementLocated(messageField));
        element.clear();
        element.sendKeys(message);
    }

    public ContactPage submit() {
        WebElement button = wait.until(
                ExpectedConditions.presenceOfElementLocated(submitButton));

        ((JavascriptExecutor) driver).executeScript(
                "arguments[0].scrollIntoView({block: 'center'});",
                button);

        wait.until(ExpectedConditions.elementToBeClickable(button));
        button.click();

        return this;
    }

    public String getStatusMessage() {
        return wait.until(
                ExpectedConditions.visibilityOfElementLocated(statusMessage))
                .getText();
    }
}
