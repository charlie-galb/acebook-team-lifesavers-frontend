describe("", () => {
  it("can visit homepage", () => {
    cy.visit("http://nonstop-growth.surge.sh");
    cy.get('#inputName')
    .type('test person').should('have.value', 'test person')
  });
});