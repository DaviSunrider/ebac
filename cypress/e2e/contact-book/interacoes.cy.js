beforeEach(() => {
  cy.visit("https://agenda-contatos-react.vercel.app/");
});

describe("testar inclusão de item", () => {
  it("deve verificar a inclusão de itens 1", () => {
    cy.get('input[type="text"]').type("gian Souza");
    cy.get('input[type="tel"]').type("11912345678");
    cy.get('input[type="email"]').type("gian@ebac.com.br");
    cy.get('button[type="submit"]').click();

    cy.get('input[type="text"]').type("Gian");
    cy.get('input[type="tel"]').type("117878755454");
    cy.get('input[type="email"]').type("gianprofessor@ebac.com.br");
    cy.get('button[type="submit"]').click();

    cy.get(".contato").should("have.length.gt", 1);
  });

  it("deve verificar a exclusao de um item", () => {
    cy.get(".contato")
      .its("length")
      .then((originalCount) => {
        cy.get(".contato:first .delete").click();
        cy.get(".contato").should("have.length", originalCount - 1);
      });
  });
});

describe("testar edição de item", () => {
  it("deve verificar a edição de itens", () => {
    cy.get(".contato:eq(1) .edit").click();
    cy.get('input[type="text"]').clear().type("Novo Nome");
    cy.get('input[type="tel"]').clear().type("999999999");
    cy.get('input[type="email"]').clear().type("novo@email.com");
    cy.get(".alterar").click();

    cy.get(".contato:eq(1)").should("contain", "Novo Nome");
    cy.get(".contato:eq(1)").should("contain", "999999999");
    cy.get(".contato:eq(1)").should("contain", "novo@email.com");
  });
});
