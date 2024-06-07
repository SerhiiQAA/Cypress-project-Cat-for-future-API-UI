describe('Cookies', () => {
    it('cookies_new', () => {
      cy.viewport(1920,1080)
      cy.visit('https://cat-for-future.site/')

  // cookies
      cy.get('._cookie_1sbl7_1')
      .should('be.visible')

  // cookies buttons
      cy.get('._link_1sbl7_67')
      .contains('Політика конфіденційності')
      .should('be.visible')

      cy.get('._cookie_1sbl7_1 > ._button_a4x38_2')
      .contains('OK')
      .should('be.visible')

  // close cookies
      cy.get('._close_1sbl7_39')
      .should('be.visible')
      .click()

  // checking the closure of cookies
      cy.get('._cookie_1sbl7_1')
      .should('not.exist')  
    });
})