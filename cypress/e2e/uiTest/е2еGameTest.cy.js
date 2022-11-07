import { CheckersPage } from "../../support/pages/CheckersPage";

const checkersPage = new CheckersPage();
let space53 = checkersPage._selectors.space53;
let space62 = checkersPage._selectors.space62;
let space44 = checkersPage._selectors.space44;
let messageText = "Select an orange piece to move.";

describe("Checkers", () => {
  before(() => {
    cy.navigateToCheckersPage();
  });

  it("AQA-01 - Checkers - Start a New Game", () => {
    checkersPage.clickRestartButton();
    // first move
    checkersPage.getMessageSelector().should("contain.text", messageText);
    checkersPage.clickSpace62();
    checkersPage.checkSquareIsHighlightedWhenSelected(space62);
    checkersPage.clickSpace53();
    checkersPage.checkIsCheckerLocationOnSquare(space53);
    // second move
    checkersPage.clickSpace53();
    checkersPage.checkSquareIsHighlightedWhenSelected(space53);
    checkersPage.clickSpace44();
    checkersPage.checkSquareIsGray(space44);
    // Start a new game
    checkersPage.clickRestartButton();
    checkersPage.getMessageSelector().should("contain.text", messageText);
  });
});
