const { expect } = require('chai');
const sinon = require('sinon');
const { verifyPassword, verifyEmail, verifyName, verifyRole } = require('../../middleware/user.validation');

describe('Input Verification Functions', () => {
  describe('verifyPassword', () => {
    it('should return status 400 and an error message if password length is less than 6 characters', async () => {
      const req = { body: { password: '12345' } };
      const res = {
        status: (statusCode) => ({
          json: (data) => {
            expect(statusCode).to.equal(400);
            expect(data.message).to.equal('"password" length must be at least 6 characters long');
          },
        }),
      };
      await verifyPassword(req, res);
    });

    it('should call next() if password length is greater than or equal to 6 characters', async () => {
      const req = { body: { password: '123456' } };
      const res = { status: () => ({ json: () => {} }) };
      const next = () => {};
      const nextSpy = sinon.spy(next);
      await verifyPassword(req, res, nextSpy);
      expect(nextSpy.calledOnce).to.be.true;
    });
  });

  describe('verifyEmail', () => {
    it('should return status 400 and an error message if email is not valid', async () => {
      const req = { body: { email: 'invalid-email' } };
      const res = {
        status: (statusCode) => ({
          json: (data) => {
            expect(statusCode).to.equal(400);
            expect(data.message).to.equal('"email" must be a valid email.');
          },
        }),
      };
      await verifyEmail(req, res);
    });

    it('should call next() if email is valid', async () => {
      const req = { body: { email: 'valid@email.com' } };
      const res = { status: () => ({ json: () => {} }) };
      const next = () => {};
      const nextSpy = sinon.spy(next);
      await verifyEmail(req, res, nextSpy);
      expect(nextSpy.calledOnce).to.be.true;
    });
  });

  describe('verifyName', () => {
    it('should return status 400 and an error message if name length is less than 12 characters', async () => {
      const req = { body: { name: 'short name' } };
      const res = {
        status: (statusCode) => ({
          json: (data) => {
            expect(statusCode).to.equal(400);
            expect(data.message).to.equal('"name" length must be at least 12 characters long');
          },
        }),
      };
      await verifyName(req, res);
    });

    it('should call next() if name length is greater than or equal to 12 characters', async () => {
      const req = { body: { name: 'longer name test' } };
      const res = { status: () => ({ json: () => {} }) };
      const next = () => {};
      const nextSpy = sinon.spy(next);
      await verifyName(req, res, nextSpy);
      expect(nextSpy.calledOnce).to.be.true;
    });
  });

  describe('verifyRole', () => {
    it('should return status 400 and an error message if role is "administrator"', async () => {
      const req = { body: { role: 'administrator' } };
      const res = {
        status: (statusCode) => ({
          json: (data) => {
            expect(statusCode).to.equal(400);
            expect(data.message).to.equal('"role" must be a valid role.');
          },
        }),
      };
      await verifyRole(req, res);
    });

    it('should call next() if role is not "administrator"', async () => {
      const req = { body: { role: 'client' } };
      const res = { status: () => ({ json: () => {} }) };
      const next = () => {};
      const nextSpy = sinon.spy(next);
      await verifyRole(req, res, nextSpy);
      expect(nextSpy.calledOnce).to.be.true;
    });
  });
});
