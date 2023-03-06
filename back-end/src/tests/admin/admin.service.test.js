const sinon = require('sinon');
const { expect } = require('chai');

const { User } = require('../../database/models');
const { findUsers, deleteUser } = require('../../service/admin.service');
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

  afterEach(sinon.restore);

  describe('testa a função deleteUser', () => {
    it('deleta um usuário pelo id', async () => {

      sinon.stub(User, 'destroy').resolves(usersMock[2]);

      const response = await deleteUser(3)

      expect(response).to.deep.equal({ status: 204, result: usersMock[2] });
    });

    it('caso o usuário não exista retorna um erro', async () => {

      sinon.stub(User, 'findByPk').resolves({ status: 404, message: 'User not found' });

      const response = await deleteUser(4)

      expect(response).to.deep.equal({ status: 404, message: 'User not found' });
    });
  });
});
