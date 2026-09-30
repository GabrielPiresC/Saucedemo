Cypress.Commands.add('fillLogin', (usuario) => {
    cy.get('[data-test="username"]').type(usuario.username)
    cy.get('[data-test="password"]').type(usuario.password)
    cy.get('[data-test="login-button"]').click()
})