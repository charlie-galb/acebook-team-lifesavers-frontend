module.exports = {
    get: jest.fn().mockResolvedValue({
        data: 'data'
    }),
    post: jest.fn().mockResolvedValue({
        data: 'data'
    }),
  };