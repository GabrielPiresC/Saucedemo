Cypress.Commands.add('fillLogin', (usuario) => {
    cy.get('[data-test="username"]').type(usuario.username)
    cy.get('[data-test="password"]').type(usuario.password)
    cy.get('[data-test="login-button"]').click()
})

Cypress.Commands.add('fillCheckout', (usuario) => {
    cy.get('[data-test="firstName"]').type(usuario.firstName)
    cy.get('[data-test="lastName"]').type(usuario.lastName)
    cy.get('[data-test="postalCode"]').type(usuario.postalCode)
})