describe('After lanching the app, user will see Network page by default', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should see network screen', async () => {
    await expect(element(by.id('network-screen'))).toBeVisible();
  });
  it('should see user list', async () => {
    await expect(element(by.id('user-list'))).toBeVisible();
  });
});
