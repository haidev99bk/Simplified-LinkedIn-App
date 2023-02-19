describe('By clicking the first card, user should see his own articles', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('I land on network screen', async () => {
    await expect(element(by.id('network-screen'))).toBeVisible();
  });
  it('I should see my card info', async () => {
    await expect(element(by.id('user-card-1'))).toBeVisible();
  });
  it('I tap on my card', async () => {
    await element(by.id('user-card-1')).tap();
  });
  it('I should see my articles screen', async () => {
    await expect(element(by.id('my-articles-screen'))).toBeVisible();
  });
});
