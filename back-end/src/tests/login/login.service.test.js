const sinon = require('sinon');
const { expect } = require('chai');

const { User } = require('../../database/models');
const { login } = require('../../service/login.service');
const { generateToken } = require('../../utils/generate.token');
const { userMock, validEmail, validPassword, invalidPassword } = require('./mocks');

describe('testa a camada services para a rota /login', () => {

  afterEach(sinon.restore);

  describe('testa a função login', () => {

    const token = generateToken(userMock)

    const userExist = {
      status: 200,
      result: {
        id: 2,
        name: 'Fulana Pereira',
        email: 'fulana@deliveryapp.com',
        role: 'seller',
        token: token,
      }
    }

    it('encontra o usuário', async () => {

      sinon.stub(User, 'findOne').resolves(userMock);
      const response = await login(validEmail, validPassword);

      expect(response).to.deep.equal(userExist);
    });

    it('retorna um erro caso a senha esteja incorreta', async () => {

      sinon.stub(User, 'findOne').resolves({ status: 401, message: 'Invalid password' });
      const response = await login(validEmail, invalidPassword);

      expect(response).to.deep.equal({ status: 401, message: 'Invalid password' });
    });
  });
});
