export class CheckersPage {
  constructor() {
    this._selectors = {
      restartButton: '[href="./"]',
      space62: '[name="space62"]',
      space53: '[name="space53"]',
      space44: '[name="space44"]',
      imgOfCheckers: "you1.gif",
      highlightedOfCheckers: "you2.gif",
      grayOfCheckers: "gray.gif",
      messageSelector: "#message",
    };
  }

  getMessageSelector() {
    return cy.get(this._selectors.messageSelector);
  }

  getSpace53() {
    return cy.get(this._selectors.space53);
  }

  getSpace44() {
    return cy.get(this._selectors.space44);
  }

  getSpace62() {
    return cy.get(this._selectors.space62);
  }

  getRestartButton() {
    return cy.get(this._selectors.restartButton);
  }

  clickSpace44() {
    cy.wait(1000);
    return this.getSpace44().should("be.visible").click();
  }

  clickSpace53() {
    cy.wait(1000);
    return this.getSpace53().should("be.visible").click();
  }

  clickRestartButton() {
    return this.getRestartButton().should("be.visible").click();
  }

  clickSpace62() {
    return this.getSpace62().should("be.visible").click();
  }

  checkIsCheckerLocationOnSquare(getSquareSelector) {
    return cy
      .get(getSquareSelector)
      .should("have.attr", "src", this._selectors.imgOfCheckers);
  }

  checkSquareIsHighlightedWhenSelected(getSquareSelector) {
    return cy
      .get(getSquareSelector)
      .should("have.attr", "src", this._selectors.highlightedOfCheckers);
  }

  checkSquareIsGray(getSquareSelector) {
    return cy
      .get(getSquareSelector)
      .should("have.attr", "src", this._selectors.grayOfCheckers);
  }
}
