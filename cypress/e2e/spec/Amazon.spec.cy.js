// cypress/integration/amazon_registration_login.spec.js
import data from "../../fixtures/user.json";
import signUp from "../pageObject/signUp";
import SignUpPage from "../pages/SignUpPage";

describe('Amazon registration', () => {

  beforeEach(() => {
    cy.signInAmazon();
  });

  it('displays errors when all fields are empty', () => {
    cy.submitClick();
    SignUpPage.userNameErrorMessage();
    cy.verifyMobileErrorMessages(true);
    SignUpPage.enterPasswordErrorMessage()
  })

  it('displays errors when only spaces are entered in the username field', () => {
    SignUpPage.userNameField(data.signup.onlySpace);
    cy.submitClick();
    SignUpPage.userNameErrorMessage();
    cy.verifyMobileErrorMessages(true);
    SignUpPage.enterPasswordErrorMessage()
    //SignUpPage.enterPasswordErrorMessage()
  })

  it('displays errors when no phone number, email, and password are provided', () => {
    SignUpPage.userNameField(data.signup.validUserName);
    cy.submitClick();
    cy.verifyMobileErrorMessages(true);
    SignUpPage.enterPasswordErrorMessage()
  });

  it('displays errors when only a mobile number is provided', () => {
    SignUpPage.enterOnlyValidMobileNumber(data.signup.validPhoneNumber);
    cy.submitClick();
    SignUpPage.userNameErrorMessage();
    SignUpPage.enterPasswordErrorMessage()

  })
  it('displays errors when only a valid email is provided', () => {
    SignUpPage.enterOnlyValidEmail(data.signup.validMailId);
    cy.submitClick();
    SignUpPage.userNameErrorMessage();
    cy.verifyMobileErrorMessages(true);
    SignUpPage.enterPasswordErrorMessage()
  })
  it('displays errors when only a valid password is provided', () => {
    SignUpPage.enterOnlyValidPassword(data.signup.validPassword);
    cy.submitClick();
    SignUpPage.userNameErrorMessage();
    cy.verifyMobileErrorMessages(true);
  })

  it('displays errors when an invalid mobile number is provided', () => {
    SignUpPage.enterOnlyValidMobileNumber(data.signup.invalidMobilNumber);
    cy.submitClick();
    cy.verifyMobileErrorMessages(false);
    SignUpPage.userNameErrorMessage();
    SignUpPage.enterPasswordErrorMessage()
  })
  it('displays errors when only the minimum digit password is provided', () => {
    SignUpPage.passwordField(data.signup.leastPassword);
    cy.submitClick();
    SignUpPage.userNameErrorMessage();
    cy.verifyMobileErrorMessages(true);
    cy.verifyPasswordLeastMessages();
  })
  it('successfully proceeds to the next page when all valid data is provided', () => {
    cy.validSignUpForm(data.signup.validUserName,data.signup.validPhoneNumber,data.signup.validMailId,data.signup.validPassword);
  })

});
