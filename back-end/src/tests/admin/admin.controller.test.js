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

  describe('testa a função findUsers', () => {
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

  describe('testa a função deleteUser', () => {
    it('deleta um usuário pelo id', async () => {

      const req = {
        params: 2,
      };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(adminService, 'deleteUser').resolves({ status: 204, result: usersMock[2] });

      await adminController.deleteUser(req, res);

      expect(res.status).to.have.be.calledWith(204);
      expect(res.json).to.have.be.calledWith({ status: 204, result: usersMock[2] });
    });

    it('caso o usuário não exista retorna um erro', async () => {

      const req = {
        params: 3,
      };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(adminService, 'deleteUser').resolves({ status: 404, message: 'User not found' });

      await adminController.deleteUser(req, res);

      expect(res.status).to.have.be.calledWith(404);
      expect(res.json).to.have.be.calledWith({ status: 404, message: 'User not found' });
    });
  });

  describe('testa a função findSellers', () => {
    it('retorna todos os vendedores', async () => {

      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      const sellers = usersMock.filter(({ role }) => role === 'seller');

      sinon.stub(adminService, 'findSellers').resolves({ status: 200, result: sellers });

      await adminController.findSellers(req, res);

      expect(res.status).to.have.be.calledWith(200);
      expect(res.json).to.have.be.calledWith({ status: 200, result: sellers });
    });
  });
});