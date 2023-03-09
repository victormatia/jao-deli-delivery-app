const sinon = require('sinon');
const { expect } = require('chai');
const jwt = require('jsonwebtoken');

const { User } = require('../../database/models');
const { login } = require('../../service/login.service');
const { generateToken } = require('../../utils/generate.token');
const { userMock, validEmail, validPassword, invalidPassword } = require('./mocks');

describe('testa a camada services para a rota /login', () => {

  afterEach(sinon.restore);

  describe('testa a função login', () => {

    const userExist = {
      status: 200,
      result: {
        id: 2,
        name: 'Fulana Pereira',
        email: 'fulana@deliveryapp.com',
        role: 'seller',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZ1bGFuYUBkZWxpdmVyeWFwcC5jb20iLCJyb2xlIjoic2VsbGVyIiwiaWQiOjIsImlhdCI6MTY3ODMwNTgyNywiZXhwIjoxNjc4MzkyMjI3fQ.odUf1JRn45OZB3TaHbItiyyGWso8UXnIK-NZueOFuEU',
      }
    }

    it('encontra o usuário', async () => {

      sinon.stub(User, 'findOne').resolves(userMock);
      sinon.stub(jwt, 'sign').returns('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZ1bGFuYUBkZWxpdmVyeWFwcC5jb20iLCJyb2xlIjoic2VsbGVyIiwiaWQiOjIsImlhdCI6MTY3ODMwNTgyNywiZXhwIjoxNjc4MzkyMjI3fQ.odUf1JRn45OZB3TaHbItiyyGWso8UXnIK-NZueOFuEU');
      const response = await login(validEmail, validPassword);

      expect(response).to.deep.equal(userExist);
    });

    it('retorna um erro caso o usuário não exista', async () => {
        
      sinon.stub(User, 'findOne').resolves(null);
      const response = await login(validEmail, validPassword);
  
      expect(response).to.deep.equal({ status: 404, message: 'User not found' });
    });

    it('retorna um erro caso a senha esteja incorreta', async () => {

      sinon.stub(User, 'findOne').resolves({ status: 401, message: 'Invalid password' });
      const response = await login(validEmail, invalidPassword);

      expect(response).to.deep.equal({ status: 401, message: 'Invalid password' });
    });
  });
});
