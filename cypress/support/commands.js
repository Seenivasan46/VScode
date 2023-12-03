// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import SignUpPage from "../e2e/pages/SignUpPage";

//SignIn Amazon
Cypress.Commands.add('signInAmazon', () => {
    cy.visit("/register");
    cy.url().should('include', '/register');
});

//Valid Inputs username, number, email, password
Cypress.Commands.add('validSignUpForm', (username, number, email, password) => {
    SignUpPage.userNameField(username);
    SignUpPage.enterOnlyValidMobileNumber(number);
    SignUpPage.enterOnlyValidEmail(email);
    SignUpPage.passwordField(password);
    SignUpPage.submitField();
});

//name error custom command 
Cypress.Commands.add('verifyNameErrorMessages', () => {
    SignUpPage.userNameErrorMessage();
});

//mobile error custom command
Cypress.Commands.add('verifyMobileErrorMessages', (isValidMobileNumber) => {
    if (isValidMobileNumber) {
        SignUpPage.enterMobileNumberErrorMessage();
    } else {
        SignUpPage.enterInvalidMobileNumber();
    }
});

//password least error custom command
Cypress.Commands.add('verifyPasswordLeastMessages', () => {
    SignUpPage.passwordLeastMessage();
})

//password error message custom command
Cypress.Commands.add('verifyPasswordErrorMessages', () => {
    SignUpPage.enterPasswordErrorMessage();
})

//submit custom command
Cypress.Commands.add('submitClick', () => {
    SignUpPage.submitField();
})

//wait custom command
const waitForSelector = (item, options = {}) => {
    const defaultSettings = {
        timeout: 200,
        tries: 300,
    };

    const SETTINGS = { ...defaultSettings, ...options };

    const check = item => {
        if (typeof item === 'string') {
            return Cypress.$(item).length > 0;
        }
        else {
            return item();
        }
    }

    return new Cypress.Promise((resolve, reject) => {
        let index = 0;
        const interval = setInterval(() => {
            if (check(item)) {
                clearInterval(interval);
                resolve();
            }
            if (index > SETTINGS.tries) {
                reject();
            }
            index++;
        }, SETTINGS.timeout);
    });
}

Cypress.Commands.add('waitForSelector', waitForSelector);











