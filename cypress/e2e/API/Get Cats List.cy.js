
  describe('API Test', () => {
    it('Should return 200 and correct body', () => {
      cy.request('http://45.94.157.117:6601/api/v1/cats').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');
        const urlPattern = new RegExp('^(http|https)://[^ "]+$');
        expect(response.body[0]).to.have.property('id').to.be.a('number');
        expect(response.body[0]).to.have.property('name').to.be.a('string');
        expect(response.body[0]).to.have.property('is_male').to.be.a('boolean');
        expect(response.body[0]).to.have.property('is_reserved').to.be.a('boolean');
        expect(response.body[0]).to.have.property('description').to.be.a('string');
        expect(response.body[0]).to.have.property('date_of_birth').to.be.a('string');
        expect(response.body[0].photos[0]).to.have.property('id').to.be.a('number');
        expect(response.body[0].photos[0]).to.have.property('media_path').to.match(urlPattern);
      });
    });
  });
  