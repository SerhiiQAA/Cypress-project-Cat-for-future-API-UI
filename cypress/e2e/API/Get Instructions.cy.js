describe('Get Instructions', () => {
    it('Get Instructions', () => {
      cy.request('http://45.94.157.117:6601/api/v1/instructions').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');
        
        response.body.forEach((item) => {
          expect(item).to.be.an('object');
          expect(item).to.have.property('id').and.to.be.a('number');
          expect(item).to.have.property('title').and.to.be.a('string');
          expect(item).to.have.property('description').and.to.be.a('string');
        });
      });
    });
  });
  