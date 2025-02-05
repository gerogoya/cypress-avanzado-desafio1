export class RegisterPage {
  elements = {
    loginLink: () => cy.get("#registertoggle"),
  };
  dblClickLogin_Link() {
    this.elements.loginLink().dblclick();
  }
}
