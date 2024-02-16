describe('Menu', () => {
    it('Navigation menu', () => {
      cy.visit('https://cat-for-future.crabdance.com/')
      cy.viewport(1920,1080)
      cy.location('protocol').should('eq','https:')
      cy.get('._contentBtn_1gw6e_178 > ._button_a4x38_2').should('be.visible')
      cy.get('._cookie_1sbl7_1 > ._button_a4x38_2').click() 

    cy.get('._container_ni4e4_12 > ._menu_15spm_33 > ._list_15spm_1 > :nth-child(1) > a')
    .should('be.visible')
    .contains('Перегляд кошенят')
    .click()
    cy.url().should('include','ourCats')

    cy.get('._container_ni4e4_12 > ._menu_15spm_33 > ._list_15spm_1 > :nth-child(2) > a')
    .should('be.visible')
    .contains('Щасливі історії')
    .click()
    cy.url().should('include','happyStories')

    cy.get('._container_ni4e4_12 > ._menu_15spm_33 > ._list_15spm_1 > :nth-child(3) > a')
    .should('be.visible')
    .contains('Контакти')
    .click()
    cy.url().should('include','contacts')

    cy.get('._btnWrapper_ni4e4_35 > ._primaryBtn_a4x38_11')
    .should('be.visible')
    .contains('Допомогти')
    .click()
    cy.get('._modalWrapper_1j588_38').should('be.visible')
    cy.get('._close_1j588_90').click()

    cy.get('._container_ni4e4_12 > ._logo_tsyqa_1 > a > img')
    .should('be.visible')
    .click()
    cy.get('._contentBtn_1gw6e_178 > ._button_a4x38_2')
    .contains('Знайти друга')
    .should('be.visible')

    cy.get('._container_ni4e4_12 > ._logo_tsyqa_1 > a > img').click()   
    })
  })