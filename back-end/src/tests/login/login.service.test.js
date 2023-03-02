const sinon = require('sinon');
const { expect } = require('chai');

const { User } = require('../../database/models');
const { login } = require('../../service/login.service');
const { generateToken } = require('../../utils/generate.token');
const { userMock, userServiceMock, validEmail, validPassword } = require('./mocks');

describe('testa a camada services para a rota /login', () => {

  afterEach(sinon.restore);

  describe('testa a função login', () => {
    it('encontra o usuário', async () => {

      sinon.stub(User, 'findOne').resolves(userMock);
      const response = await login(validEmail, validPassword);

      const token = generateToken(userMock)

      expect(response).to.deep.equal({
        status: 200,
        result: {
          id: 2,
          name: 'Fulana Pereira',
          email: 'fulana@deliveryapp.com',
          role: 'seller',
          token: token,
        }
      });
    });
  });
});
