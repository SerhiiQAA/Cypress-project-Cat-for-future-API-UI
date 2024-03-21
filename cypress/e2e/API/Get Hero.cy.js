describe('Get Hero', () => {
    it('Checks the response', () => {
      cy.request('http://45.94.157.117:6601/api/v1/hero').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', 1);
        expect(response.body).to.have.property('title', 'Подаруй дім для маленьких хвостиків');
        expect(response.body).to.have.property('sub_title', 'Вони чекають на тебе');
        expect(response.body).to.have.property('media_path', 'https://cat-for-future.site/static/media/hero/423e7777c7c149acbc8637cc6ab15d28.webp');
        expect(response.body).to.have.property('left_text', 'Наша місія проста, але могутня');
        expect(response.body).to.have.property('right_text', 'Опікуємось котами, які поруч з нами переживають буремні часи. Прилаштовуємо у добрі руки.');
      });
    });
  });