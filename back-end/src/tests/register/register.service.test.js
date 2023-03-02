const sinon = require('sinon');
const { expect } = require('chai');

const { User } = require('../../database/models');
const { insertRegisterBody, userMock } = require('./mocks')
const { createUser } = require('../../service/register.service');

describe('testa a camada services para a rota /register', () => {

  afterEach(sinon.restore);

  describe('testa a função createUser', () => {
    it('cria um novo usuário', async () => {

      sinon.stub(User, 'create').resolves(userMock);

      const response = await createUser(insertRegisterBody);

      expect(response).to.deep.equal({ status: 201, result: userMock });
    });
  });
});
