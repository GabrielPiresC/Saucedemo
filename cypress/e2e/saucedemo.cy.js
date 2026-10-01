describe('Saucedemo - Swag Labs', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })

    // CT01
    it('Verifica se loga com sucesso com usuário e senha válido', () => {
      cy.fixture('usuarios').then((usuarios) => {
        cy.fillLogin(usuarios.usuarioValido)
      })
      

      cy.url().should('include', '/inventory.html')
      cy.get('[data-test="inventory-item"]').should('have.length', 6)
    })

    // CT02
    it('Exibe mensagem de erro com senha inválida', () => {
      cy.fixture('usuarios').then((usuarios) => {
        cy.fillLogin(usuarios.usuarioInvalido)
      })

      cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain.text', 'Epic sadface: Username and password do not match any user in this service')
    })

    // CT02.2 
    it('Exibe mensagem de erro com usuario inválido', () => {
      cy.fixture('usuarios').then((usuarios) => {
        cy.fillLogin(usuarios.usuarioInvalido2)
      })

      cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain.text', 'Epic sadface: Username and password do not match any user in this service')
    })

    //CT03
    it('Verifica fluxo de compras', () => {
      cy.fixture('usuarios').then((usuarios) => {
        cy.fillLogin(usuarios.usuarioValido)
      })

      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
      cy.get('[data-test="shopping-cart-link"]').click()
      cy.get('[data-test="checkout"]').click()
      
      cy.fixture('checkout').then((checkout) => {
        cy.fillCheckout(checkout.dadosValidos)
      })

      cy.get('[data-test="continue"]').click()
      cy.get('[data-test="finish"]').click()

      cy.get('[data-test="complete-header"]')
        .should('be.visible')
        .and('contain.text', 'Thank you for your order')
    })

    //CT04
    it('Verifica se desloga com sucesso e volta a página inicial', () => {
      cy.fixture('usuarios').then((usuarios) => {
        cy.fillLogin(usuarios.usuarioValido)
      })

      cy.get('#react-burger-menu-btn').click()
      cy.get('[data-test="logout-sidebar-link"]').click()

      cy.get('[data-test="login-button"]').should('be.visible')
    })
})