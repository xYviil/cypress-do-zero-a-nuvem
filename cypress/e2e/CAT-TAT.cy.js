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

//Exercício extra 2

  it('Exibe mensagem de erro ao submeter o formulário com um email de formatação inválida', () => {
    cy.get('#firstName').type('Vinícius')
    cy.get('#lastName').type('Meurer Petry')
    cy.get('#email').type('viniciusmeurer2012gmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()

    cy.get('.error').should('be.visible')
    })

//Exercício extra 3

  it('Campo telefone continua vazio quando preenchido com um valor não-numérico', () => {
    cy.get('#phone').type('abcde').should('have.value', '')
  })

//Exercício extra 4

  it('Exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    cy.get('#firstName').type('Vinícius')
    cy.get('#lastName').type('Meurer Petry')
    cy.get('#email').type('viniciusmeurer2012@gmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.get('#phone-checkbox').check()
    cy.get('button[type="submit"]').click()

    cy.get('.error').should('be.visible')
  })

//Exercício extra 5

  it.only('Preenche e limpa os campos nome, sobrenome, email e telefone', () => {
    cy.get('#firstName').type('Vinícius').should('have.value', 'Vinícius').clear().should('have.value', '')
    cy.get('#lastName').type('Meurer Petry').should('have.value', 'Meurer Petry').clear().should('have.value', '')
    cy.get('#email').type('viniciusmeurer2012gmail.com').should('have.value', 'viniciusmeurer2012gmail.com').clear().should('have.value', '')
    cy.get('#open-text-area').type('Teste').should('have.value', 'Teste').clear().should('have.value', '')
  })

})