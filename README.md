# Swag Labs Automation

Automation Testing on the [Swag Labs Website](https://www.saucedemo.com/)  
This project automates login, add-to-cart, and checkout flows using **Playwright**, **JavaScript**, and the **Page Object Model (POM)** pattern.

---

## Packages Used
- `@playwright/test` — Playwright automation framework  
- `allure-playwright` — For Allure reporting  
- `node` — v16 or later required  
- `mocha` (optional) — Test runner alternative  

---

## Author
- [@shohelranashaon](https://github.com/shohelranashaon)

---

## Documentation

This is a **Page Object Model (POM)** based **automation framework** developed for the Swag Labs website.  
Every page has its own class,  and all **locators** are managed centrally inside a single `locators.js` file.

**Framework Highlights:**
- Page Object Model (POM) Structure  
- Centralized locator management  
- Sequential test execution for multiple scenarios  
- Allure report generation after every run  
- Modular test design (Login, Add to Cart, Checkout Verification)

---

## Prerequisites

To run this project, make sure you have:
- **Node.js** version **16+**
- **Java** version **8+** (required for Allure commandline)


## Run Locally 
Clone The Project

```bash 
git clone https://github.com/shohelranashaon/SwagLabsAutomation.git

```
Change Project Directory

```bash 
cd SwagLabsAutomation
```
Install dependencies
```bash
npm install
```

Run Single File 
**Test File 1** file
```bash
npx playwright test tests/ques1LockOutUser.spec.js
```
**Test File 2**
```bash
npx playwright test tests/ques2StandardUser.spec.js
```
**Test File 3**
```bash
npx playwright test tests/ques3GlitchUser.spec.js
```

## Run Sequentially All test file
```bash
npx playwright test --headed
```
