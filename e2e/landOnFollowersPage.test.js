describe("By clicking the first follower card, user should see his follower's articles", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('I land on network screen', async () => {
    await expect(element(by.id('network-screen'))).toBeVisible();
  });
  it('I should see my first follower card', async () => {
    await expect(element(by.id('user-card-2'))).toBeVisible();
  });
  it('I tap on my first follower card', async () => {
    await element(by.id('user-card-2')).tap();
  });
  it("I should see my follower's screen", async () => {
    await expect(element(by.id('followers-articles'))).toBeVisible();
  });
});
