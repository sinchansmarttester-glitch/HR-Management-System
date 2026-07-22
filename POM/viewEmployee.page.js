import { expect } from '@playwright/test'

class ViewEmployee {
    constructor(page) {
        this.viewEmployeeButton = page.locator("//a[text()='View Employee']")
        this.assertion = page.locator("//tr/descendant::td[contains(.,'James Bond')]")
        this.empID = page.locator("//td[contains(.,'Bond')]/ancestor::tr/td[1]")
    }

    async viewEmployee() {
        await this.viewEmployeeButton.click({ timeout: 60000 })
        await expect(this.assertion).toContainText("James Bond")
        return await this.empID.innerText()
    }
}
export default ViewEmployee