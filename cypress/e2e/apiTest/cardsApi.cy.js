import ApiController from "../../support/API/controllers/ApiController";

describe("Api testing", () => {
  beforeEach(function () {
    ApiController.getDeckId().as(DeckId);
  });

  it("tests the validationCode", function () {
    cy.request({
      method: "POST",
      url: "https://deckofcardsapi.com/api/deck/<<deck_id>>/shuffle/?remaining=true",
    });
  });

  it("Create A New Deck", () => {
    cy.request({
      method: "POST",
      url: "https://deckofcardsapi.com/api/deck/new/",
    }).as("createNewDesk");
    cy.get("@createNewDesk").then((response) => {
      expect(response).property("status").to.equal(200);
      expect(response.body).to.deep.include({
        success: true,
        shuffled: false,
        remaining: 52,
      });
      expect(response.body).to.have.property("deck_id");
    });
  });
});
