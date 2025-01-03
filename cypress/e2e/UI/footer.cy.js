describe('Footer', () => {
    it('Navigation footer', () => {
        cy.viewport(1920, 1080)
        cy.visit('/')

        cy.injectAxe()
        cy.checkA11y()

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

        cy.get('._mainContentContainer_iuhou_49')
            .contains('Рекомендації по утриманню тварин')

        cy.get('g[id="facebook icon"]')
            .should('be.visible')

        cy.get('g[id="instagram icon/Default"]')
            .should('be.visible')
    })
})

