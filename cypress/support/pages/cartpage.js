export class CartPage {
  elements = {
    productNameCell: () => cy.get("#productName"),
    cartItemsTable: () => cy.get("div.css-5drwi8"),
  };
}
