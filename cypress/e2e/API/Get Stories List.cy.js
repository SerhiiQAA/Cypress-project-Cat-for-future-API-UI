describe('Swagger Documentation Test', () => {
    it('Checks the response', () => {
      cy.request('http://45.94.157.117:6601/api/v1/stories').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');
        const urlPattern = new RegExp('^(http|https)://[^ "]+$');
        response.body.forEach((item) => {
          expect(item).to.have.property('id').to.be.a('number');
          expect(item).to.have.property('title').to.be.a('string');
          expect(item).to.have.property('text').to.be.a('string');
          expect(item).to.have.property('media_path').to.match(urlPattern);
        });
      });
    });
  });
  