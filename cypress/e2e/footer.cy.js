describe('Footer', () => {
    it('Navigation footer', () => {
        cy.viewport(1920,1080)
        cy.visit('https://cat-for-future.crabdance.com/')
        cy.get('div[class="_container_iuhou_26"]')
        .should('be.visible')
        .contains('Перегляд кошенят')

        cy.get('._mainContentContainer_iuhou_49')
        .contains('Щасливі історії')

        cy.get('._mainContentContainer_iuhou_49')
        .contains('Контакти')

        cy.get('._mainContentContainer_iuhou_49')
        .contains('Політика конфіденційності')

        cy.get('._mainContentContainer_iuhou_49')
        .contains('Правила користування сайтом')

        cy.get('._mainContentContainer_iuhou_49')
        .contains('Звітність')

        


    })
})

