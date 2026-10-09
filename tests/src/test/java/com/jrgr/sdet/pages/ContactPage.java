
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

    // Exact selector from your React component
    private final By statusMessage =
            By.cssSelector("#contact .form-status");

    public ContactPage(WebDriver driver) {
        this.driver = driver;
        this.wait = new WebDriverWait(
                driver, Duration.ofSeconds(20));
    }

    public ContactPage enterName(String name) {
        WebElement field = wait.until(
                ExpectedConditions.visibilityOfElementLocated(nameField));
        field.clear();
        field.sendKeys(name);
        return this;
    }

    public ContactPage enterPhone(String phone) {
        WebElement field = wait.until(
                ExpectedConditions.visibilityOfElementLocated(phoneField));
        field.clear();
        field.sendKeys(phone);
        return this;
    }

    public ContactPage enterMessage(String message) {
        WebElement field = wait.until(
                ExpectedConditions.visibilityOfElementLocated(messageField));
        field.clear();
        field.sendKeys(message);
        return this;
    }

    public ContactPage submit() {
        WebElement button = wait.until(
                ExpectedConditions.elementToBeClickable(submitButton));

        ((JavascriptExecutor) driver).executeScript(
                "arguments[0].scrollIntoView({block: 'center'});", button);

        try {
            wait.until(ExpectedConditions.elementToBeClickable(submitButton))
                    .click();
        } catch (org.openqa.selenium.ElementClickInterceptedException e) {
            // Fallback for an intercepted click
            button = driver.findElement(submitButton);
            ((JavascriptExecutor) driver).executeScript(
                    "arguments[0].click();", button);
        }

        return this;
    }

    public String getStatusMessage() {
        return wait.until(
                ExpectedConditions.visibilityOfElementLocated(statusMessage))
                .getText()
                .trim();
    }
}
