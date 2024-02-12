describe('Menu', () => {
    it('Navigation menu', () => {
      cy.visit('https://cat-for-future.crabdance.com/')
      cy.viewport(1920,1080)
      cy.location('protocol').should('eq','https')
      cy.get('._contentBtn_1gw6e_178 > ._button_a4x38_2').should('be.visible')
      cy.get('._cookie_1sbl7_1 > ._button_a4x38_2').click() 
      cy.get('div[class="_cookie_1sbl7_1"]').should('be.visible')
      cy.get('#root > div > div._cookie_1sbl7_1 > div._text_1sbl7_50 > a').should('have.text','Політика конфіденційності')
      cy.get('._cookie_1sbl7_1 > ._button_a4x38_2').should('be.visible')
      cy.get('._close_1sbl7_39').should('be.visible')
      cy.get('._cookie_1sbl7_1 > ._button_a4x38_2').click()   
    })
  })