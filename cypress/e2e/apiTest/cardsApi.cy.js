import ApiController from "../../support/API/controllers/ApiController";

describe("Api testing", () => {
  var getDeckId;

  // beforeEach(function () {
  //   getDeckId = ApiController.getDeckId();
  // });

  // it("tests the validationCode", function () {
  //   cy.request({
  //     method: "POST",
  //     url: "https://deckofcardsapi.com/api/deck/<<deck_id>>/shuffle/?remaining=true",
  //   });
  // });

  it("Create A New Deck", () => {
    cy.log("1");
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
      cy.log(3);
      getDeckId = response.body.deck_id;
      cy.log(`${getDeckId}`);
      // respDeck_id.as("aliasRespDeck_id");
      // expect(response.body).to.have.property(`${respDeck_id}`);
    });
    cy.log(`${getDeckId}`);

    cy.log("2");

    let urlRequest =
      "https://deckofcardsapi.com/api/deck/" +
      getDeckId +
      "/shuffle/?deck_count=1";
    cy.log(`${urlRequest}`);
    cy.request({
      method: "POST",
      url: urlRequest,
    }).as("shuffleCards");
    cy.get("@shuffleCards").then((response) => {
      expect(response).property("status").to.equal(200);
      expect(response.body).to.deep.include({
        success: true,
        shuffled: true,
        remaining: 52,
      });
      cy.log(response.body.deck_id);
      expect(response.body).to.have.property("deck_id");
    });
  });
});
