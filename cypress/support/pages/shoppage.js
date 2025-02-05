export class ShopPage {
  elements = {
    closeModalButton: () => cy.get('[data-cy="closeModal"]'),
    goShoppingCartButton: () => cy.get("#goShoppingCart"),
    addProductButton: () => cy.get('[data-cy="add-product"]'),
    productNameInput: () => cy.get('[data-cy="productName"]'),
    productPriceInput: () => cy.get('[data-cy="productPrice"]'),
    ImageUrlInput: () => cy.get('[data-cy="productCard"]'),
    productIdInput: () => cy.get('[data-cy="productID"]'),
    createProductButton: () => cy.get('[data-cy="createProduct"]'),

    messageAlertModal: () => cy.get("section[role='dialog']"),
    searchTypeSelect: () => cy.get('[data-cy="search-type"]'),
    searchInput: () => cy.get('[data-cy="search-bar"]'),

    productNameLabel: () => cy.get('[data-cy="name"]'),
    deleteProductButton: () => cy.get("#saveEdit"),
  };

  addNewProduct(productName, productPrice, ImageUrl, productId) {
    this.elements.productNameInput().type(productName);
    this.elements.productPriceInput().type(productPrice);
    this.elements.ImageUrlInput().type(ImageUrl);
    this.elements.productIdInput().type(productId);
    this.elements.createProductButton().click();
  }
  clickAddProduct() {
    this.elements.addProductButton().click();
  }
  selectProduct(productId) {
    cy.get(productId).click();
  }
  closeModal() {
    this.elements.closeModalButton().click();
  }
  clickOnGoToCart() {
    this.elements.goShoppingCartButton().click();
  }

  searchNewProductByiD(productId) {
    this.elements.searchTypeSelect().select("ID");
    this.elements.searchInput().type(productId + "{enter}");
  }

  removeProduct() {
    this.elements
      .productNameLabel()
      .parents("div")
      .find("button[aria-label='Delete']")
      .click();
    this.elements.deleteProductButton().click();
  }
}
