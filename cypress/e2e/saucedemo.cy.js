describe('Saucedemo - Swag Labs', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })

    // CT01
    it('Verifica se loga com sucesso com usuário e senha válido', () => {
      cy.get('[data-test="username"]').type('standard_user')
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('[data-test="login-button"]').click()

      cy.get('.app_logo').should('be.visible')
    })

    // CT02
    it('Exibe mensagem de erro com usuario e/ou senha inválidos', () => {
      cy.get('[data-test="username"]').type('standard_user')
      cy.get('[data-test="password"]').type('secret_juice')
      cy.get('[data-test="login-button"]').click()

      cy.get('[data-test="error"]').should('be.visible')
    })

    //CT03
    it('Verifica fluxo de compras', () => {
      cy.get('[data-test="username"]').type('standard_user')
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('[data-test="login-button"]').click()
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
      cy.get('[data-test="shopping-cart-link"]').click()
      cy.get('[data-test="checkout"]').click()
      cy.get('[data-test="firstName"]').type('Gabriel')
      cy.get('[data-test="lastName"]').type('Pires')
      cy.get('[data-test="postalCode"]').type('985625122')
      cy.get('[data-test="continue"]').click()
      cy.get('[data-test="finish"]').click()

      cy.get('[data-test="complete-header"]').should('be.visible')
    })

    //CT04
    it('Verifica se desloga com sucesso e volta a página inicial', () => {
      cy.get('[data-test="username"]').type('standard_user')
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('[data-test="login-button"]').click()
      cy.get('#react-burger-menu-btn').click()
      cy.get('[data-test="logout-sidebar-link"]').click()

      cy.get('[data-test="login-button"]').should('be.visible')
    })

})
