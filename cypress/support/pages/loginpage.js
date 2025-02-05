export class LoginPage {
  elements = {
    userInput: () => cy.get("#user"),
    passwordInput: () => cy.get("#pass"),
    submitButton: () => cy.get("#submitForm"),
  };
  login(usr, pass) {
    this.elements.userInput().type(usr);
    this.elements.passwordInput().type(pass);
    this.elements.submitButton().click();
  }
}
