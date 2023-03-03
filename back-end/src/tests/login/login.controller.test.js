const chai = require('chai');
const sinon = require('sinon');
const { expect } = require('chai');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const loginService = require('../../service/login.service')
const loginController = require('../../controller/login.controller')

const { userServiceMock } = require('./mocks');

describe('testa a camada controllers para a rota /login', () => {

  afterEach(sinon.restore);

  describe('testa a função login', () => {
    it('retorna um erro caso o usuário não seja encontrado', async () => {
      const req = {
        body: {
          email: 'batatinha01@mail.com',
          password: '123456',
        }
      };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(loginService, 'login').resolves({ status: 401, message: 'Invalid password' });

      await loginController.login(req, res);

      expect(res.status).to.have.be.calledWith(401);
      expect(res.json).to.have.be.calledWith({ status: 401, message: 'Invalid password' });
    });

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