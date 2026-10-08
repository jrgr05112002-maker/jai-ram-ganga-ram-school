package com.jrgr.sdet.tests.api;

import com.jrgr.sdet.config.ConfigReader;
import io.restassured.RestAssured;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.is;

public class HealthApiTest {

    @BeforeClass
    public void setUp() {
        RestAssured.baseURI = ConfigReader.get("api.base.url");
    }

    @Test(description = "Verify health endpoint returns HTTP 200")
    public void healthCheck() {
        given()
                .when()
                .get("/api/health")
                .then()
                .statusCode(200)
                .body("success", is(true))
                .body("message", equalTo("School API is running"));
    }
}
