describe("end to end test", () => {
  it("should open webapp", () => {
    cy.visit("https://assessment-finlex.herokuapp.com/");
  });

  it("should see all the employees", () => {
    cy.get('[test-id="card-id"]').then((cards) => cards.length === 24);
    cy.get('[test-id="search-field"]')
      .type("Tiger")
      .should("have.value", "Tiger");

    cy.get('[test-id="employee-name"]').contains("Tiger Nixon");
    cy.get('[test-id="search-field"]').clear().should("have.value", "");
    cy.get('[test-id="employee-name"]').then(
      (employees) => employees.length === 24
    );
  });
});
