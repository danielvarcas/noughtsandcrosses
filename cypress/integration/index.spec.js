describe('noughts and crosses', () => {
  beforeEach(() => {
    cy.visit('') // defaults to index.html
  })

  it('exists', () => {
    cy.visit('')
  });

  it('game starts with player turn equal to O', () => {
    cy.get('#currentPlayer')
      .should('contain', 'O');
  });

  it('clicking on a square results in the correct mark', () => {
    cy.get('#1')
      .click()
      .should('contain', 'O');
  });
});