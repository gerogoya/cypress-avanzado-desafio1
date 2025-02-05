import { RegisterPage } from "../../support/pages/registerpage";
import { LoginPage } from "../../support/pages/loginpage";
import { HomePage } from "../../support/pages/homepage";
import { ShopPage } from "../../support/pages/shoppage";
import { CartPage } from "../../support/pages/cartpage";

describe("Desafio 1", () => {
  const registerpage = new RegisterPage();
  const loginpage = new LoginPage();
  const homepage = new HomePage();
  const shoppage = new ShopPage();
  const cartpage = new CartPage();
  let productFixture;

  before(function NameBefore() {
    cy.fixture("products").then((data) => {
      productFixture = data;
    });
  });

  context("Add/Remove item from Shoping cart", () => {
    it("Add an item to the shopping cart and then remove it", () => {
      //test
      cy.visit("/");
      registerpage.dblClickLogin_Link();
      loginpage.login(Cypress.env("username"), Cypress.env("password"));
      homepage.goToOnlineShop();
      shoppage.clickAddProduct();
      shoppage.addNewProduct(
        `${productFixture.productName}`,
        `${productFixture.productPrice}`,
        `${productFixture.imageUrl}`,
        `${productFixture.productId}`
      );

      shoppage.elements
        .messageAlertModal()
        .should("include.text", `${productFixture.productName} has been added`);
      shoppage.closeModal();
      shoppage.searchNewProductBy("ID", `${productFixture.productId}`);
      shoppage.elements
        .productNameLabel()
        .contains(`${productFixture.productName}`)
        .should("be.visible");
      shoppage.elements
        .productNameLabel()
        .should("have.text", `${productFixture.productName}`);

      shoppage.removeProduct();
      cy.contains(`${productFixture.productName} has been deleted`).should(
        "exist"
      );
      shoppage.elements.closeModalButton().click();
      shoppage.elements.searchInput().clear();
      shoppage.searchNewProductBy("ID", `${productFixture.productId}`);
      shoppage.elements
        .productNameLabel()
        .contains(`${productFixture.productName}`)
        .should("not.exist");

      shoppage.logoutButton();
    });
  });
});
