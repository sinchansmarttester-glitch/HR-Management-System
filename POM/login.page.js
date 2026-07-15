class Login {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator("//input[@placeholder='Enter Email Address']")
    this.passwordInput = page.locator("//input[@placeholder='Enter Password']")
    this.loginButton = page.locator("//input[@type='submit']")
  }

  async login(username, password) {
    await this.usernameInput.fill(username)
    await this.passwordInput.fill(password)
    await this.loginButton.click()
  }
}
export default Login