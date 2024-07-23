describe('Our Cats', () => {
  it('Our Cats', () => {
    cy.viewport(1920, 1080)
    cy.visit('/')

    cy.injectAxe()
    cy.checkA11y()

    cy.location('protocol').should('eq', 'https:')

    cy.get('._container_ni4e4_12 > ._menu_15spm_33 > ._list_15spm_1 > :nth-child(1) > a')
      .should('be.visible')
      .contains('Перегляд кошенят')
      .click()

    cy.get('div._wrapper_u3kbr_1:nth-child(1) > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)')
      .click()

    cy.get('._wrapper_1ipm8_20 > ._wrapper_u3kbr_1')
      .should('be.visible')
      .contains('Забронювати')
    cy.get('._selectedImage_1ar4d_1 > img')
      .should('be.visible')

    cy.get('._imagesRow_1ar4d_14 > :nth-child(2) > img')
      .should('be.visible')
      .click()

    cy.get('._imagesRow_1ar4d_14 > :nth-child(3) > img')
      .should('be.visible')
      .click()

    cy.get('._imagesRow_1ar4d_14 > :nth-child(4) > img')
      .should('be.visible')
      .click()

    cy.get('._closeIcon_1ipm8_26')
      .should('be.visible')
      .click()
  })
})