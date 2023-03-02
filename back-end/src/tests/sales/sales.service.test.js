// const { expect } = require('chai');
// // const mocha = require('mocha');
// const salesService = require('../../service/sales.service');

// describe('SalesService', () => {
//   describe('create', () => {
//     it('should create a new sale', async () => {
//       const newSale = {
//         userId: 1,
//         sellerId: 2,
//         totalPrice: 10,
//         deliveryAddress: '123 Main St',
//         deliveryNumber: '456',
//         status: 'Pendente',
//         saleDate: new Date(),
//         cart: [
//           {
//             id: 1,
//             quantity: 2,
//           },
//           {
//             id: 2,
//             quantity: 1,
//           },
//         ],
//       };

//       const result = await salesService.create(newSale);

//       expect(result).to.deep.include(newSale);
//       expect(await Sale.count()).to.equal(1);
//     });
//   });
// });

