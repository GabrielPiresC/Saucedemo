describe('Saucedemo - Swag Labs', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })

    // CT01
    it('Verifica se loga com sucesso com usuário e senha válido', () => {
      cy.fillLogin()

      cy.url().should('include', '/inventory.html')
      cy.get('[data-test="inventory-item"]').should('have.length', 6)
    })

    // CT02
    it('Exibe mensagem de erro com usuario e/ou senha inválidos', () => {
      cy.get('[data-test="username"]').type('standard_user')
      cy.get('[data-test="password"]').type('secret_juice')
      cy.get('[data-test="login-button"]').click()

      cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain.text', 'Epic sadface: Username and password do not match any user in this service')
    })

    //CT03
    it('Verifica fluxo de compras', () => {
      cy.fillLogin()

      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
      cy.get('[data-test="shopping-cart-link"]').click()
      cy.get('[data-test="checkout"]').click()
      cy.get('[data-test="firstName"]').type('Gabriel')
      cy.get('[data-test="lastName"]').type('Pires')
      cy.get('[data-test="postalCode"]').type('985625122')
      cy.get('[data-test="continue"]').click()
      cy.get('[data-test="finish"]').click()

      cy.get('[data-test="complete-header"]')
        .should('be.visible')
        .and('contain.text', 'Thank you for your order')
    })

    //CT04
    it('Verifica se desloga com sucesso e volta a página inicial', () => {
      cy.fillLogin()

      cy.get('#react-burger-menu-btn').click()
      cy.get('[data-test="logout-sidebar-link"]').click()

      cy.get('[data-test="login-button"]').should('be.visible')
    })

})
