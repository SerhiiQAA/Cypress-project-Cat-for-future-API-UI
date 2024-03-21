describe('Swagger Documentation Test', () => {
    it('Checks the response', () => {
      cy.request('http://45.94.157.117:6601/api/v1/user/me').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id').to.be.a('number');
        expect(response.body).to.have.property('email').to.be.a('string');
        expect(response.body).to.have.property('is_active').to.be.a('boolean');
        expect(response.body).to.have.property('is_superuser').to.be.a('boolean');
        expect(response.body).to.have.property('is_verified').to.be.a('boolean');
        expect(response.body).to.have.property('name').to.be.a('string');
        expect(response.body).to.have.property('phone').to.be.a('string');
      });
    });
  });
  