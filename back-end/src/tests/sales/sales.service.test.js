const assert = require('assert');
const sinon = require('sinon');
// const { expect } = require('chai');
const { Sale, Product, User } = require('../../database/models');
const salesService = require('../../service/sales.service');
const salesProductService = require('../../service/sales.products.service');

describe('Sales Service', () => {
  describe('create()', () => {
    it('should create a sale and return a status of 201', async () => {
      const saleData = {
        seller: 1,
        totalPrice: 50,
        deliveryAddress: '123 Main St',
        deliveryNumber: 5,
        user: { id: 1 },
        products: [{ productId: 1, quantity: 2 }, { productId: 2, quantity: 1 }],
        status: 'Pendente',
      };
      sinon.stub(Sale, 'create').resolves(saleData);
      sinon.stub(salesProductService, 'create').resolves();
      const { status, result } = await salesService.create(saleData);
   
      assert.strictEqual(status, 201);
      assert.strictEqual(result.user.id, saleData.user.id);
      assert.strictEqual(result.totalPrice, saleData.totalPrice);
      assert.strictEqual(result.deliveryAddress, saleData.deliveryAddress);
      assert.strictEqual(result.deliveryNumber, saleData.deliveryNumber);
      assert.strictEqual(result.status, 'Pendente');
    });
  });

  describe('getAll()', () => {
    it('should return all sales', async () => {
      sinon.stub(Sale, 'findAll').resolves([{ id: 1 }, { id: 2 }, { id: 3 }]);
      const result = await salesService.getAll();
      assert.strictEqual(result.status, 200);
      assert(Array.isArray(result.result));
    });
  });

  describe('getSaleById()', () => {
    it('should return the sale with the given ID', async () => {
      const id = 1;
      const sale = await Sale.findOne({ where: { id } });
      const result = await salesService.getSaleById(sale);
      assert.deepStrictEqual(result.status, 200);
      assert.deepStrictEqual(result.result.id, sale.id);
      assert.deepStrictEqual(result.result.userId, sale.userId);
    });

    // it('should return status 404 if sale not found', async () => {
    //   const result = await salesService.getSaleById(99999);
    //   assert.deepStrictEqual(result.status, 404);
    // });
  });

  describe('getSaleByUserId()', () => {
    it('should return all sales for the given user ID', async () => {
      const id = 1;
      const result = await salesService.getSaleByUserId(id);

      assert.deepStrictEqual(result.status, 200);
      assert.deepStrictEqual(result.result.length, 3);
    });
  });

  describe('getSaleBySellerId()', () => {
    it('should return all sales associated with the given seller ID', async () => {
      const id = 1;   
      const result = await salesService.getSaleBySellerId(id);

      assert.deepStrictEqual(result.status, 200);
      assert.deepStrictEqual(result.result.length, 3);
    });
  });

  describe('Update()', () => {
    it('should update the status of a sale', async () => {
      const id = 1;
      sinon.stub(Sale, 'findByPk').resolves({ id: 1, status: 'Pendente' });
      sinon.stub(Sale, 'update').resolves({ id: 1, status: 'Aprovado' });
  
      const result = await salesService.update(id, 'Aprovado');
  
      assert.strictEqual(result.status, 200);
      assert.strictEqual(result.message, 'Status updated successfully!');
    });
  });
});

