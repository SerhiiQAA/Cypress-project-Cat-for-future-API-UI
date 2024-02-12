describe('Help', () => {
    it('Help', () => {
      cy.visit('https://cat-for-future.crabdance.com/')
      cy.viewport(1920,1080)
      cy.location('protocol').should('eq','https:')

      cy.get('._btnWrapper_ni4e4_35 > ._primaryBtn_a4x38_11')
      .should('be.visible')
      .contains('Допомогти')
      .click()

      cy.get('._modalWrapper_1j588_38')
      .contains('Оплатити')

      cy.get('._donatesAmountWrapper_1j588_134 > :nth-child(1)')
      .contains('100 UAH')
      .click()
      cy.get('input._donateAmount_1j588_153')
      .should('have.value','100')

      cy.get('._donatesAmountWrapper_1j588_134 > :nth-child(2)')
      .contains('200 UAH')
      .click()
      cy.get('input._donateAmount_1j588_153')
      .should('have.value','200')


      cy.get('._donatesAmountWrapper_1j588_134 > :nth-child(3)')
      .contains('500 UAH')
      .click()
      cy.get('input._donateAmount_1j588_153')
      .should('have.value','500')

      cy.get('._btnWrapper_1j588_187 > ._button_a4x38_2')
      .contains('Оплатити')
      .click()  

    //   cy.url().should('have.text','wayforpay')
    })
  })