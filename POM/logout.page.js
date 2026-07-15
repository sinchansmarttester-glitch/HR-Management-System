class LogOut
{
    constructor(page)
    {
        this.logoutButton=page.locator("//a[@href='alogin.html']")
    }
    async logOut()
    {
        await this.logoutButton.click()
    }
}
export default LogOut