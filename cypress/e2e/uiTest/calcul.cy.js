let result = "The factorial of ";
let is = " is: ";

const factorialNumber = [
  { data: "0", result: "1" },
  { data: "3", result: "6" },
  { data: "4", result: "24" },
];

describe("Checkers", () => {
  before(() => {
    cy.visit("https://qainterview.pythonanywhere.com/");
    cy.contains("The greatest factorial calculator!").should("be.visible");
  });

  factorialNumber.forEach((testCase) => {
    it("AQA-02 enter" + testCase.data, () => {
      cy.get("#number").clear().type(testCase.data);
      cy.get("[type='submit']").click();
      cy.get("#resultDiv").should(
        "contain.text",
        result + testCase.data + is + testCase.result
      );
    });
  });
});
