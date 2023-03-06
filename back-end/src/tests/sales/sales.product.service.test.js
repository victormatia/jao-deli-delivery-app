const assert = require('assert');
const sinon = require('sinon');
const { SaleProduct } = require('../../database/models');
const salesProductsService = require('../../service/sales.products.service');

describe('salesProductsService', () => {
  describe('create', () => {
    it('should call bulkCreate with the correct arguments', async () => {
      const stub = sinon.stub(SaleProduct, 'bulkCreate').resolves();
      const products = [
        { productId: 1, quantity: 2 },
        { productId: 3, quantity: 4 },
      ];
      const saleId = 5;

      await salesProductsService.create({ products, saleId });

      assert(stub.calledOnceWithExactly([
        { saleId: 5, productId: 1, quantity: 2 },
        { saleId: 5, productId: 3, quantity: 4 },
      ]));

      stub.restore();
    });
  });
});
