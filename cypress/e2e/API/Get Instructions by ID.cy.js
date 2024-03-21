describe('Get Instruction by ID', () => {
    it('Get Instruction by ID', () => {
        const instructionId = 1;
      cy.request(`http://45.94.157.117:6601/api/v1/instructions/${instructionId}`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('object');
        expect(response.body).to.have.property('id').and.to.be.a('number');
        expect(response.body).to.have.property('title').and.to.be.a('string');
        expect(response.body).to.have.property('description').to.be.a('string');
      });
    });
  });
  