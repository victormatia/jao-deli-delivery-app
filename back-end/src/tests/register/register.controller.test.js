const chai = require('chai');
const sinon = require('sinon');
const { expect } = require('chai');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const registerService = require('../../service/register.service')
const registerController = require('../../controller/register.controller')

const { insertRegisterBody } = require('./mocks');
const { generateToken } = require('../../utils/generate.token');

describe('testa a camada controllers para a rota /products e /products/:id', () => {

  afterEach(sinon.restore);

  describe('testa a função getAllProducts', () => {
    it('Busca por todos os produtos cadastrados', async function () {

      const req = {
        body: insertRegisterBody
      };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(registerService, 'createUser').resolves(insertRegisterBody);

      await registerController.registerUser(req, res);

      const token = generateToken({ email: req.body.email, role: req.body.role })

      expect(res.status).to.have.be.calledWith(201);
      expect(res.json).to.have.be.calledWith({ token });
    });
  });
});