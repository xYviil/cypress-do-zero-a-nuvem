describe('Central de Atendimento ao Cliente TAT', () => {
    beforeEach (() => {
        cy.visit('./src/index.html')
    } )

  it('verifica o título da aplicação', () => {
    cy.title('Central de Atendimento ao Cliente TAT').should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  it('Preenche os campos obrigatórios e envia ao formulário', () => {

    const longTest = Cypress._.repeat('abcdefghijklmnopqrstuvwxyz', 10)

    cy.get('#firstName').type('Vinícius')
    cy.get('#lastName').type('Meurer Petry')
    cy.get('#email').type('viniciusmeurer2012@gmail.com')
    cy.get('#open-text-area').type(longTest, {delay: 0 })
    cy.get('button[type="submit"]').click()

    cy.get('.success').should('be.visible')
  })

  it('Exibe mensagem de erro ao submeter o formulário com um email de formatação inválida', () => {
    cy.get('#firstName').type('Vinícius')
    cy.get('#lastName').type('Meurer Petry')
    cy.get('#email').type('viniciusmeurer2012gmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()

    cy.get('.error').should('be.visible')
    })

  it.only('Campo telefone continua vazio quando preenchido com um valor não-numérico', () => {
    cy.get('#phone').type('abcde').should('have.value', '')
  })




})