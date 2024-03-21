describe('Get Documents', () => {
    it('Get Documents', () => {
      cy.request('http://45.94.157.117:6601/api/v1/documents').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');
        
        response.body.forEach((item) => {
          expect(item).to.be.an('object');
          expect(item).to.have.property('id').and.to.be.a('number');
          expect(item).to.have.property('name').and.to.be.a('string');
          expect(item).to.have.property('media_path').and.to.be.a('string');
        });
      });
    });
  });
  