export class ApiController {
  getDeckId() {
    return cy
      .request({
        method: "POST",
        url: "https://deckofcardsapi.com/api/deck/new/",
      })
      .then((response) => {
        expect(response.status).to.eq(200);
        cy.log(response.body.deck_id).then(() => {
          return response.body;
        });
      });
  }
}

export default new ApiController();
