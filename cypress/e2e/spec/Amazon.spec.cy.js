import data from "../../fixtures/user.json";
import signUp from "../pageObject/signUp";
import SignUpPage from "../pages/SignUpPage";

describe('Amazon registration', () => {

  beforeEach(() => {
    cy.signInAmazon();
  });

  it('displays errors when all fields are empty', () => {
     /* 
    This test case checks for error messages when all fields are submitted empty.
    It performs the following steps:
      1. Submits the form with empty fields.
      2. Verifies the error messages for username and mobile number fields.
      3. Checks for the password error message.
  */
    cy.submitClick();
    SignUpPage.userNameErrorMessage();
    cy.verifyMobileErrorMessages(true);
    SignUpPage.enterPasswordErrorMessage()
  })

  it('displays errors when only spaces are entered in the username field', () => {
     /* 
    This test case validates error messages when the username field contains only spaces.
    It performs the following steps:
      1. Enters only spaces in the username field.
      2. Submits the form.
      3. Verifies the error message related to the username field.
      4. Checks for mobile number error messages.
      5. Validates the password error message.
  */
    SignUpPage.userNameField(data.signup.onlySpace);
    cy.submitClick();
    SignUpPage.userNameErrorMessage();
    cy.verifyMobileErrorMessages(true);
    SignUpPage.enterPasswordErrorMessage()
  })

  it('displays errors when no phone number, email, and password are provided', () => {
     /* 
    This test case validates error messages when the form is submitted without providing a phone number, email, and password.
    It performs the following steps:
      1. Enters a valid username.
      2. Submits the form.
      3. Verifies error messages related to the absence of a phone number and the requirement for a password.
  */
    SignUpPage.userNameField(data.signup.validUserName);
    cy.submitClick();
    cy.verifyMobileErrorMessages(true);
    SignUpPage.enterPasswordErrorMessage()
  });

  it('displays errors when only a mobile number is provided', () => {
     /* 
    This test case checks for error messages when the form is submitted with only a mobile number.
    It performs the following steps:
      1. Enters a valid mobile number.
      2. Submits the form.
      3. Verifies error messages related to the absence of a username and password.
  */
    SignUpPage.enterOnlyValidMobileNumber(data.signup.validPhoneNumber);
    cy.submitClick();
    SignUpPage.userNameErrorMessage();
    SignUpPage.enterPasswordErrorMessage()
  })

  it('displays errors when only a valid email is provided', () => {
    /* 
    This test case checks for error messages when the form is submitted with only a valid email.
    It performs the following steps:
      1. Enters a valid email address.
      2. Submits the form.
      3. Verifies error messages related to the absence of a username and mobile number, and checks for the password error message.
  */
    SignUpPage.enterOnlyValidEmail(data.signup.validMailId);
    cy.submitClick();
    SignUpPage.userNameErrorMessage();
    cy.verifyMobileErrorMessages(true);
    SignUpPage.enterPasswordErrorMessage()
  })

  it('displays errors when only a valid password is provided', () => {
     /* 
    This test case checks for error messages when the form is submitted with only a valid password.
    It performs the following steps:
      1. Enters a valid password.
      2. Submits the form.
      3. Verifies error messages related to the absence of a username and mobile number.
  */
    SignUpPage.enterOnlyValidPassword(data.signup.validPassword);
    cy.submitClick();
    SignUpPage.userNameErrorMessage();
    cy.verifyMobileErrorMessages(true);
  })

  it('displays errors when an invalid mobile number is provided', () => {
    /* 
    This test case validates error messages when the form is submitted with an invalid mobile number.
    It performs the following steps:
      1. Enters an invalid mobile number.
      2. Submits the form.
      3. Verifies the absence of mobile-related error messages.
      4. Checks for the presence of username and password error messages.
  */
    SignUpPage.enterOnlyValidMobileNumber(data.signup.invalidMobilNumber);
    cy.submitClick();
    cy.verifyMobileErrorMessages(false);
    SignUpPage.userNameErrorMessage();
    SignUpPage.enterPasswordErrorMessage()
  })
  it('displays errors when only the minimum digit password is provided', () => {
    /* 
    This test case checks for error messages when the form is submitted with a password that has the minimum required characters.
    It performs the following steps:
      1. Enters a password with the minimum required characters.
      2. Submits the form.
      3. Verifies error messages related to the absence of a username and mobile number.
      4. Validates the password's minimum character requirement error message.
  */
    SignUpPage.passwordField(data.signup.leastPassword);
    cy.submitClick();
    SignUpPage.userNameErrorMessage();
    cy.verifyMobileErrorMessages(true);
    cy.verifyPasswordLeastMessages();
  })
  it('successfully proceeds to the next page when all valid data is provided', () => {
     /* 
    This test case validates the successful navigation to the next page when the form is submitted with all valid data.
    It performs the following steps:
      1. Enters a valid username, phone number, email, and password.
      2. Submits the form.
      3. Verifies successful navigation or processing to the next page.
  */
    cy.validSignUpForm(data.signup.validUserName,data.signup.validPhoneNumber,data.signup.validMailId,data.signup.validPassword);
  })

});
