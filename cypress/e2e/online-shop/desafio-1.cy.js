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
  let varFixture;
  let credentialsData;

  before(function NameBefore() {
    cy.fixture("products").then((data) => {
      varFixture = data;
    });

    cy.fixture("credentials").then((data) => {
      credentialsData = data;
    });
  });
  beforeEach(function NameBeforeEach() {});
  after(function NameAfter() {});
  afterEach(function NameAfterEach() {});

  context("Add/Remove item from Shoping cart", () => {
    it("Add an item to the shopping cart and then remove it", () => {
      //test
      cy.visit("https://pushing-front.vercel.app/");
      registerpage.dblClickLogin_Link();
      loginpage.login(
        `${credentialsData.username}`,
        `${credentialsData.password}`
      );
      homepage.goToOnlineShop();
      shoppage.selectProduct(`#${varFixture.productId}`);
      shoppage.closeModal();
      shoppage.clickOnGoToCart();

      cartpage.elements
        .productNameCell()
        .contains(varFixture.productName)
        .should("exist");

      cartpage.elements
        .productNameCell()
        .contains(varFixture.productName)
        .parents("div[direction='column']")
        .find("button")
        .click();
      cartpage.elements
        .cartItemsTable()
        .contains(varFixture.productName)
        .should("not.exist");
    });
  });
});
