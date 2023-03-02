const chai = require('chai');
const sinon = require('sinon');
const { expect } = require('chai');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const registerService = require('../../service/register.service')
const registerController = require('../../controller/register.controller')

const { insertRegisterBody } = require('./mocks');
const { generateToken } = require('../../utils/generate.token');

describe('testa a camada controllers para a rota /register', () => {

  afterEach(sinon.restore);

  describe('testa a função registerUser', () => {
    it('cadastra um novo usuário no banco de dados', async () => {

      const req = {
        body: insertRegisterBody
      };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(registerService, 'createUser').resolves({ status: 201, result: insertRegisterBody });

      await registerController.registerUser(req, res);

      const token = generateToken({ email: req.body.email, role: req.body.role })

      expect(res.status).to.have.be.calledWith(201);
      expect(res.json).to.have.be.calledWith({ status: 201, token, result: insertRegisterBody });
    });
  });
});