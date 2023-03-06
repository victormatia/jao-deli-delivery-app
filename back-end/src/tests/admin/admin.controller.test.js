const chai = require('chai');
const sinon = require('sinon');
const { expect } = require('chai');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const adminService = require('../../service/admin.service');
const adminController = require('../../controller/admin.controller');
const { usersMock } = require('./mock');

describe('testa a camada controllers para a rota /admin', () => {

  afterEach(sinon.restore);

  describe('testa a função registerUser', () => {
    it('retorna todos os usuários', async () => {

      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(adminService, 'findUsers').resolves({ status: 200, result: usersMock });

      await adminController.findUsers(req, res);

      expect(res.status).to.have.be.calledWith(200);
      expect(res.json).to.have.be.calledWith({ status: 200, result: usersMock });
    });
  });
});