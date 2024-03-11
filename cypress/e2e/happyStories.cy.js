describe('HappyStories', () => {
    it('HappyStories', () => {
      cy.visit('https://cat-for-future.site/')
      cy.viewport(1920,1080)
      cy.location('protocol').should('eq','https:')

      cy.get('._container_ni4e4_12 > ._menu_15spm_33 > ._list_15spm_1 > :nth-child(2) > a')
      .should('be.visible')
      .contains('Щасливі історії')
      .click()

      cy.get(':nth-child(2) > ._cardBody_5718g_45 > ._btnWrap_5718g_101 > ._btn_5718g_101')
      .contains('Читати далі')
      .click()
    
      cy.contains('Згорнути')
      .click()  
    })
  })