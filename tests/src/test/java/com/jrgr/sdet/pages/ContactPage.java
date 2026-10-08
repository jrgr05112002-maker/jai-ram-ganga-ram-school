package com.jrgr.sdet.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

public class ContactPage {
    private final WebDriver driver;
    private final WebDriverWait wait;

    private final By nameInput = By.name("name");
    private final By phoneInput = By.name("phone");
    private final By messageInput = By.name("message");
    private final By submitButton = By.cssSelector("#contact button[type='submit']");
    private final By status = By.cssSelector("#contact .form-status");

    public ContactPage(WebDriver driver) {
        this.driver = driver;
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    }

    public ContactPage enterName(String name) {
        wait.until(ExpectedConditions.visibilityOfElementLocated(nameInput)).sendKeys(name);
        return this;
    }

    public ContactPage enterPhone(String phone) {
        driver.findElement(phoneInput).sendKeys(phone);
        return this;
    }

    public ContactPage enterMessage(String message) {
        driver.findElement(messageInput).sendKeys(message);
        return this;
    }

    public ContactPage submit() {
        driver.findElement(submitButton).click();
        return this;
    }

    public String getStatusMessage() {
        return wait.until(ExpectedConditions.visibilityOfElementLocated(status)).getText();
    }
}
