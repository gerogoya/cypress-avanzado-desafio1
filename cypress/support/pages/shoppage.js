export class ShopPage {
  elements = {
    closeModalButton: () => cy.get("#closeModal"),
    goShoppingCartButton: () => cy.get("#goShoppingCart"),
  };
  selectProduct(productId) {
    cy.get(productId).click();
  }
  closeModal() {
    this.elements.closeModalButton().click();
  }
  clickOnGoToCart() {
    this.elements.goShoppingCartButton().click();
  }
}
