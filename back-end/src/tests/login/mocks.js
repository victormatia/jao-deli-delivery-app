module.exports = {
  userMock: {
    id: 2,
    name: 'Fulana Pereira',
    email: 'fulana@deliveryapp.com',
    password: '3c28d2b0881bf46457a853e0b07531c6',
    role: 'seller'
  },

  validEmail: 'fulana@deliveryapp.com',
  validPassword: 'fulana@123',
  invalidEmail: 'batatinha@gmail.com',
  invalidPassword: 'batata',

  userServiceMock: {
    status: 200,
    result: {
      id: 2,
      name: 'Fulana Pereira',
      email: 'fulana@deliveryapp.com',
      role: 'seller',
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZ1bGFuYUBkZWxpdmVyeWFwcC5jb20iLCJyb2xlIjoic2VsbGVyIiwiaWQiOjIsImlhdCI6MTY3Nzc5NDY4MywiZXhwIjoxNjc3ODgxMDgzfQ.8Q9R-mBakLybBbtNkGpnP1TDdjUWOK9iw-8AQAkNjlc'
    }
  }
};