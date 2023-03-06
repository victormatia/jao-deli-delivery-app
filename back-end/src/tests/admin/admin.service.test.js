const sinon = require('sinon');
const { expect } = require('chai');

const { User } = require('../../database/models');
const { findUsers } = require('../../service/admin.service');
const { usersMock } = require('./mock');

describe('testa a camada services para a rota /admin', () => {

  afterEach(sinon.restore);

  describe('testa a função findUsers', () => {
    it('retorna todos os usuários', async () => {

      sinon.stub(User, 'findAll').resolves(usersMock);

      const response = await findUsers();

      expect(response).to.deep.equal({ status: 200, result: usersMock });
    });
  });
});
