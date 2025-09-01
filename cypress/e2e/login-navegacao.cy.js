describe('POC de automação - Login e navegação', () => {

  const usuario = {
    email: "testelucas@gmail.com",
    senha: "teste2025"
  }

  it('Faz login e navega pelo site', () => {
    // 1. Acessa o site
    cy.visit('https://automationexercise.com/')

    // 2. Vai até a tela de login
    cy.get('a[href="/login"]').click()

    // 3. Preenche email e senha
    cy.get('input[data-qa="login-email"]').type(usuario.email)
    cy.get('input[data-qa="login-password"]').type(usuario.senha)

    // 4. Clica em "Login"
    cy.get('button[data-qa="login-button"]').click()

    // 5. Valida login feito
    cy.contains('Logged in as').should('be.visible')

    // 6. Vai até produtos
    cy.get('a[href="/products"]').click()
    cy.url().should('include', '/products')

    // 7. Abre primeiro produto
    cy.get('.choose > .nav > li > a').first().click()
    cy.get('.product-information').should('be.visible')

    // 8. Adiciona ao carrinho
    cy.get('button[class="btn btn-default cart"]').click()

    // 9. Vai para o carrinho
    //cy.get('a[href="/view_cart"]').click()
    cy.get('a[href="/view_cart"]').first().click()
    cy.url().should('include', '/view_cart')

    // 10. Valida produto no carrinho
    cy.get('.cart_description').should('be.visible')
  })
})
