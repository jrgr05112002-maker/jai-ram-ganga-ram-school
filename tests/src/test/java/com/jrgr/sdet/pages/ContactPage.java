package com.jrgr.sdet.pages;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class ContactPage {

    private WebDriver driver;
    private WebDriverWait wait;

    // Locators
    private By nameField = By.cssSelector("#contact input[name='name']");
    private By phoneField = By.cssSelector("#contact input[name='phone']");
    private By messageField = By.cssSelector("#contact textarea[name='message']");
    private By submitButton = By.cssSelector("#contact button[type='submit']");

    // Constructor
    public ContactPage(WebDriver driver) {
        this.driver = driver;
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    }

    // Enter name
    public void enterName(String name) {
        WebElement element = wait.until(
                ExpectedConditions.visibilityOfElementLocated(nameField)
        );

        element.clear();
        element.sendKeys(name);
    }

    // Enter phone
    public void enterPhone(String phone) {
        WebElement element = wait.until(
                ExpectedConditions.visibilityOfElementLocated(phoneField)
        );

        element.clear();
        element.sendKeys(phone);
    }

    // Enter message
    public void enterMessage(String message) {
        WebElement element = wait.until(
                ExpectedConditions.visibilityOfElementLocated(messageField)
        );

        element.clear();
        element.sendKeys(message);
    }

    // Submit contact form
    public void submit() {

        WebElement button = wait.until(
                ExpectedConditions.presenceOfElementLocated(submitButton)
        );

        // Scroll the button into the center of the viewport
        ((JavascriptExecutor) driver).executeScript(
                "arguments[0].scrollIntoView({block: 'center', inline: 'center'});",
                button
        );

        // Wait until Selenium considers the button clickable
        wait.until(
                ExpectedConditions.elementToBeClickable(button)
        );

        button.click();
    }
}