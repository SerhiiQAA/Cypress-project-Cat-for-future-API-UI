describe('Get Document by ID', () => {
    it('Should return 200 and correct body', () => {
        const documentId = 1;

        cy.request(`http://45.94.157.117:6601/api/v1/documents/${documentId}`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('object');
        
        expect(response.body).to.have.property('id').and.to.be.a('number');
        expect(response.body).to.have.property('name').and.to.be.a('string');
        expect(response.body).to.have.property('media_path').and.to.be.a('string');
      });
    });
  });
  