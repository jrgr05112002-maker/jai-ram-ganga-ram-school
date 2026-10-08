# JRGR School - Selenium + Rest Assured Automation

This test automation project is built for the Shri Jai Ram Ganga Ram Smart School MERN application.

## Tech stack

- Java 17
- Maven
- Selenium WebDriver
- TestNG
- Rest Assured
- WebDriverManager
- Page Object Model (POM)

## Prerequisites

1. Java 17+ installed.
2. Maven installed.
3. MongoDB Atlas configured for the backend.
4. Backend running on `http://localhost:5000`.
5. Frontend running on `http://localhost:5173`.
6. Google Chrome installed for Selenium tests.

## Start application

Terminal 1:

```bash
cd server
npm install
npm run dev
```

Terminal 2:

```bash
cd client
npm install
npm run dev
```

## Run automation

Open a third terminal:

```bash
cd tests
mvn test
```

By default Selenium runs Chrome in headless mode.

To run with a visible Chrome window:

```bash
mvn test -Dheadless=false
```

To use different URLs:

```bash
mvn test -Dui.base.url=http://localhost:5173 -Dapi.base.url=http://localhost:5000
```

## Test coverage

### Selenium UI

- Home page title
- Society section visibility
- Exactly 7 society member cards
- Horizontal scroll capability of society cards
- Contact navigation
- Contact form submission
- Success message after submission

### Rest Assured API

- GET `/api/health` - HTTP 200 and response validation
- POST `/api/enquiries` - successful enquiry creation
- POST `/api/enquiries` - required-field validation

## Project structure

```text
 tests/
 ├── pom.xml
 ├── testng.xml
 ├── README.md
 └── src/test/
     ├── java/com/jrgr/sdet/
     │   ├── base/
     │   ├── config/
     │   ├── driver/
     │   ├── pages/
     │   ├── tests/api/
     │   ├── tests/ui/
     │   └── utils/
     └── resources/
         └── config.properties
```

## Resume/project description

**JRGR Smart School - Web Automation Testing**

Automated a MERN-based school website using Selenium WebDriver and Rest Assured with Java, Maven and TestNG. Implemented Page Object Model, UI validation, contact-form automation, API health checks, enquiry creation and negative API validation.
