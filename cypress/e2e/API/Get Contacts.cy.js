describe('Get Contacts', () => {
    it('Get Contacts', () => {
      cy.request('http://45.94.157.117:6601/api/v1/contacts').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('object');
        
        expect(response.body).to.have.property('post_address').and.to.be.a('string');
        expect(response.body).to.have.property('phone_first').and.to.be.a('string');
        expect(response.body).to.have.property('phone_second').and.to.be.a('string');
        expect(response.body).to.have.property('email').and.to.be.a('string');
        expect(response.body).to.have.property('facebook').and.to.be.a('string');
        expect(response.body).to.have.property('instagram').and.to.be.a('string');
      });
    });
  });
  