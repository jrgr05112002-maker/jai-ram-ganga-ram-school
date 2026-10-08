package com.jrgr.sdet.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;
import java.util.List;

public class HomePage {
    private final WebDriver driver;
    private final WebDriverWait wait;

    private final By societySection = By.id("society");
    private final By societyCards = By.cssSelector("#society .society-card");
    private final By societyScroll = By.cssSelector("#society .society-scroll");
    private final By contactSection = By.id("contact");
    private final By contactLink = By.cssSelector("a[href='#contact']");

    public HomePage(WebDriver driver) {
        this.driver = driver;
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    }

    public HomePage open(String url) {
        driver.get(url);
        return this;
    }

    public String getTitle() {
        return driver.getTitle();
    }

    public boolean isSocietySectionDisplayed() {
        scrollTo(societySection);
        return wait.until(ExpectedConditions.visibilityOfElementLocated(societySection)).isDisplayed();
    }

    public int getSocietyMemberCount() {
        scrollTo(societySection);
        return driver.findElements(societyCards).size();
    }

    public boolean hasHorizontalSocietyScroll() {
        scrollTo(societySection);
        WebElement container = wait.until(ExpectedConditions.visibilityOfElementLocated(societyScroll));
        Long scrollWidth = ((Number) ((JavascriptExecutor) driver).executeScript(
                "return arguments[0].scrollWidth;", container)).longValue();
        Long clientWidth = ((Number) ((JavascriptExecutor) driver).executeScript(
                "return arguments[0].clientWidth;", container)).longValue();
        return scrollWidth > clientWidth;
    }

    public void clickContact() {
        wait.until(ExpectedConditions.elementToBeClickable(contactLink)).click();
        wait.until(ExpectedConditions.visibilityOfElementLocated(contactSection));
    }

    private void scrollTo(By locator) {
        WebElement element = wait.until(ExpectedConditions.presenceOfElementLocated(locator));
        ((JavascriptExecutor) driver).executeScript(
                "arguments[0].scrollIntoView({behavior:'instant', block:'center'});", element);
    }
}
