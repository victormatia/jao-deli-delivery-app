const sinon = require('sinon');
const { expect } = require('chai');

const { Product } = require('../../database/models');
const { findProducts } = require('../../service/product.service');
const { productsMock } = require('./mock');

describe('testa a camada services para a rota /product', () => {

  afterEach(sinon.restore);

  describe('testa a função findProducts', () => {
    it('retorna todos os produtos', async () => {

      sinon.stub(Product, 'findAll').resolves(productsMock);

      const response = await findProducts();

      expect(response).to.deep.equal({ status: 200, result: productsMock })
    })
  })
})
