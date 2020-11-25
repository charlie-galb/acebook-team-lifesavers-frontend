
module.exports = {
    get: jest.fn().mockResolvedValue({
        data: 'data'
    }),
    post: jest.fn().mockResolvedValue({
        data: 'data'
    }),
    create: jest.fn(function () {
        return this;
    })
  };