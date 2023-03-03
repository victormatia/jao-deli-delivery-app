const sinon = require('sinon');
const { expect } = require('chai');

const { User } = require('../../database/models');
const { insertRegisterBody, userMock, userAlreadyExists, insertRegisterWithoutRole } = require('./mocks')
const { createUser } = require('../../service/register.service');

describe('testa a camada services para a rota /register', () => {

  afterEach(sinon.restore);

  describe('testa a função createUser', () => {
    it('cria um novo usuário', async () => {

      sinon.stub(User, 'create').resolves(userMock);

      const response = await createUser(insertRegisterBody);

      expect(response).to.deep.equal({ status: 201, result: userMock });
    });

    it('retorna um erro caso ja exista um usuário com o nome ou email enviado', async () => {
      
      sinon.stub(User, 'create').resolves(userAlreadyExists);

      const response = await createUser(userAlreadyExists);

      expect(response).to.deep.equal({ status: 409, message: 'User already registered' });
    });

    it('caso a role não seja informada, role = "costumer"', async () => {

      sinon.stub(User, 'create').resolves(userMock);

      const response = await createUser(insertRegisterWithoutRole);

      expect(response).to.deep.equal({ status: 201, result: userMock })
    });
  });
});
