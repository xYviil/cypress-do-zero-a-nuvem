Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
    cy.get('#firstName').type('Vinícius')
    cy.get('#lastName').type('Meurer Petry')
    cy.get('#email').type('viniciusmeurer2012@gmail.com')
    cy.get('#open-text-area').type('Teste.')
    cy.get('button[type="submit"]').click()
})