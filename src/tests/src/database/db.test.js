const database = require('../../../database/db');

describe('Database', () => {
  /**
   * This test should be removed because is too slow for real use. Right now it exists to test jest config.
   */
  it('should authenticate to database successfully', async () => {
    await expect(database.authenticate()).resolves.not.toThrowError();
  });
});
