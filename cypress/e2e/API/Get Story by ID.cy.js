describe('Swagger Documentation Test', () => {
    it('Checks the response', () => {
        const storyId = 1;
        cy.request(`http://45.94.157.117:6601/api/v1/stories/${storyId}`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.not.be.null;
        expect(response.body).to.have.property('id').to.be.a('number');
        expect(response.body).to.have.property('title').to.be.a('string');
        expect(response.body).to.have.property('text').to.be.a('string');
        const urlPattern = new RegExp('^(http|https)://[^ "]+$');
        expect(response.body).to.have.property('media_path').to.match(urlPattern);
      });
    });
  });
  