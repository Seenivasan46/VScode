class signUp {

    yourName() {
        return cy.get('[autocomplete="name"]')
    }
    mobileNumber() {
        return cy.get('[placeholder="Mobile number"]')
    }
    email() {
        return cy.get('[type="email"]')
    }
    password() {
        return cy.get('[id="ap_password"]')
    }
    submitButton() {
        return cy.get('[id="continue"]')
    }
    nameError() {
        return cy.get(this.getAlertBoxSelector('customerName'))
    }
    mobileNumberError() {
        return cy.get(this.getAlertBoxSelector('phoneNumber'))
    }
    passwordError() {
        return cy.get(this.getAlertBoxSelector('password'))
    }
    mobileInvalidMessage() {
        return cy.xpath('//*[@id="auth-phoneNumber-invalid-phone-alert"]/div/div')
    }
    passwordErrorMessage() {
        return cy.get('#auth-password-invalid-password-alert > div > div')
    }
    getAlertBoxSelector(selector){
        return `#auth-${selector}-missing-alert > .a-box-inner > .a-alert-content`
    }
    
}
export default signUp