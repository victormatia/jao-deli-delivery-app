const jwt = require('jsonwebtoken');
const { SECRET } = require('../../utils/generate.token');
const sinon = require('sinon');
const { expect } = require('chai');
const { tokenAuthorization } = require('../../middleware/JwtAuthentication');

describe('Token Authorization Middleware', () => {
  it('should return a 401 status code when no token is provided', () => {
    const req = {
      headers: {},
    };
    const res = {
      status: (statusCode) => ({
        json: (data) => {
          expect(statusCode).to.equal(401);
          expect(data.message).to.equal('Token not found');
        },
      }),
    };
    tokenAuthorization(req, res);
  });

  it('should return a 401 status code when an invalid token is provided', () => {
    const req = {
      headers: {
        authorization: 'Bearer invalid-token',
      },
    };
    const res = {
      status: (statusCode) => ({
        json: (data) => {
          expect(statusCode).to.equal(401);
          expect(data.message).to.equal('Expired or invalid token');
        },
      }),
    };
    tokenAuthorization(req, res);
  });

  it('should set req.user with the token payload when a valid token is provided', () => {
    sinon.stub(jwt, 'verify').returns({ id: 1, name: 'John Doe' });
    const token = jwt.sign({ id: 1, name: 'John Doe' }, SECRET);
    const req = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
    const res = {};
    const next = () => {
      expect(req.user).to.deep.equal({ id: 1, name: 'John Doe' });
    };
    tokenAuthorization(req, res, next);
  });
});


