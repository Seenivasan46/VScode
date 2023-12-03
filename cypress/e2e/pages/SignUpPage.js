import signUp from "../pageObject/signUp";

class SignUpPage {

  constructor() {
    this.signup = new signUp()
  }

  visit() {
    cy.visit('/register'); 
    cy.url().should('include', 'https://www.amazon.in/register');
  }

  userNameField(username) {
    this.signup.yourName().type(username);
  }

  mobileNumberField(number) {
    this.signup.mobileNumber().type(number)
  }

  emailField(email) {
    this.signup.email().type(email)
  }

  passwordField(password) {
    this.signup.password().type(password)
  }

  submitField() {
    this.signup.submitButton().should('be.visible').dblclick()
  }

  userNameErrorMessage() {
    this.signup.nameError().should("be.visible", "Enter your name")
  }

  enterMobileNumberErrorMessage() {
    cy.waitForSelector(this.signup.getAlertBoxSelector("phoneNumber"))
    this.signup.mobileNumberError().should("be.visible", "Enter your mobile number");
  }

  enterPasswordErrorMessage() {
    cy.waitForSelector(this.signup.getAlertBoxSelector("password"))
    this.signup.passwordError().should("be.visible", "Enter your password");
  }

  enterOnlyValidMobileNumber(number) {
    this.signup.mobileNumber().type(number);
  }

  enterOnlyValidEmail(mail) {
    this.signup.email().type(mail);
  }

  enterOnlyValidPassword(password) {
    this.signup.password().type(password);
  }

  enterInvalidMobileNumber() {
    this.signup.mobileInvalidMessage().should("be.visible", "The mobile number you entered does not seem to be valid");
  }

  passwordLeastMessage() {
    cy.waitForSelector(this.signup.getAlertBoxSelector("password"))
    this.signup.passwordErrorMessage().should("be.visible", "Passwords must be at least 6 characters.")
  }

}

export default new SignUpPage();
