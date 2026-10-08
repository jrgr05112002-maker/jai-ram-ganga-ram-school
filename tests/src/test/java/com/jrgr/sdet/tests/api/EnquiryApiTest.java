package com.jrgr.sdet.tests.api;

import com.jrgr.sdet.config.ConfigReader;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import java.util.HashMap;
import java.util.Map;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.notNullValue;

public class EnquiryApiTest {

    @BeforeClass
    public void setUp() {
        RestAssured.baseURI = ConfigReader.get("api.base.url");
    }

    @Test(description = "Create enquiry successfully through REST API")
    public void createEnquiry() {
        Map<String, String> request = new HashMap<>();
        request.put("name", "Rest Assured Test");
        request.put("phone", "9876543210");
        request.put("message", "Automated API enquiry test");

        given()
                .contentType(ContentType.JSON)
                .body(request)
                .when()
                .post("/api/enquiries")
                .then()
                .statusCode(201)
                .body("success", is(true))
                .body("message", equalTo("Enquiry submitted successfully"))
                .body("data.id", notNullValue())
                .body("data.name", equalTo("Rest Assured Test"))
                .body("data.phone", equalTo("9876543210"))
                .body("data.status", equalTo("new"));
    }

    @Test(description = "Verify enquiry validation for missing required fields")
    public void createEnquiryWithoutRequiredFields() {
        Map<String, String> request = new HashMap<>();
        request.put("name", "");
        request.put("phone", "");
        request.put("message", "");

        given()
                .contentType(ContentType.JSON)
                .body(request)
                .when()
                .post("/api/enquiries")
                .then()
                .statusCode(400)
                .body("success", is(false));
    }
}
