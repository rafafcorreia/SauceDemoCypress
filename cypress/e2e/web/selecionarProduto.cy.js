describe('Selecionar Produtos', () => {

    const massa = require('../../fixtures/massaMDA')

    beforeEach(() => {
        cy.visit('/')
    })

    it('Selecionar Sauce Labs Backpack', () => {

        cy.title()
            .should('eq', 'Swag Labs')

        cy.get('input[data-test="username"]')
            .type('standard_user')

        cy.get('input[data-test="password"]')
            .type('secret_sauce')

        cy.get('#login-button')
            .click()

        cy.get('span.title')
            .should('have.text', 'Products')

        cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]')
            .click()

        cy.get('div.inventory_details_name.large_size')
            .should('have.text', 'Sauce Labs Backpack')

        cy.get('[data-test="inventory-item-price"]')
            .should('have.text', '$29.99')

        cy.get('#add-to-cart')
            .click()

        cy.get('[data-test="shopping-cart-badge"]')
            .should('have.text', '1')

        cy.get('a.shopping_cart_link')
            .click()

        cy.get('[data-test="inventory-item-name"]')
            .should('have.text', 'Sauce Labs Backpack')

        cy.get('[data-test="inventory-item-price"]')
            .should('have.text', '$29.99')

    })


    massa.array.forEach(({ username, productName, productPrice }) => {
        it(`Selecionar produto ${productName} - Usuario: ${username}`, () => {
            cy.title()
                .should('eq', 'Swag Labs')

            cy.get('input[data-test="username"]')
                .type(username)

            cy.get('input[data-test="password"]')
                .type('secret_sauce')

            cy.get('#login-button')
                .click()

            cy.get('span.title')
                .should('have.text', 'Products')

            cy.get(`[data-test="inventory-item-${productName.split(' ').join('-').toLowerCase()}-img"]`)
                .click()

            cy.get('div.inventory_details_name.large_size')
                .should('have.text', productName)

            cy.get('[data-test="inventory-item-price"]')
                .should('have.text', productPrice)

            cy.get('#add-to-cart')
                .click()

            cy.get('[data-test="shopping-cart-badge"]')
                .should('have.text', '1')

            cy.get('a.shopping_cart_link')
                .click()

            cy.get('[data-test="inventory-item-name"]')
                .should('have.text', productName)

            cy.get('[data-test="inventory-item-price"]')
                .should('have.text', productPrice)
        })
    });

})
