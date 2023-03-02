const chai = require('chai');
const sinon = require('sinon');
const { expect } = require('chai');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const loginService = require('../../service/login.service')
const loginController = require('../../controller/login.controller')

const { insertRegisterBody, userAlreadyExists, insertUserBody, userServiceMock } = require('./mocks');
const { generateToken } = require('../../utils/generate.token');

describe('testa a camada controllers para a rota /login', () => {

  afterEach(sinon.restore);

  describe('testa a função login', () => {
    it('encontra o usuário cadastrado', async () => {
      const req = {
        body: {
          email: 'fulana@deliveryapp.com',
          password: 'fulana@123',
        }
      };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(loginService, 'login').resolves(userServiceMock);

      await loginController.login(req, res);

      expect(res.status).to.have.be.calledWith(200);
      expect(res.json).to.have.be.calledWith(userServiceMock);
    });
  });
});