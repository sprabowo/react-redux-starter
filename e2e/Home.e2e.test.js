describe('Home', () => {
  before(() => {
    cy.visit('/')
  })

  it('should update state with increment', () => {
    cy.get('[data-testid="increment-home"]').click()

    cy.get('[data-testid="counter-value-home"]').should('have.text', 1)
  })
  
  it('should update state with decrement', () => {
    cy.get('[data-testid="decrement-home"]').click()

    cy.get('[data-testid="counter-value-home"]').should('have.text', 0)
  })
})