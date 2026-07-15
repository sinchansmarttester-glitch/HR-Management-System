import { expect } from "@playwright/test"

class ViewEmployee {
    constructor(page) {
        this.viewEmployeeButton = page.locator("//a[text()='View Employee']")
        this.assertion = page.locator("//tr/descendant::td[contains(.,'James Bond')]")
       
        //this.del=page.getByRole('link', { name: 'Delete' }).nth(2)
        this.del=page.locator("//td[text()='James Bond']/following::a[contains(.,'Delete')]")
    }
    async viewEmployee() {
        await this.viewEmployeeButton.click()
        await expect(this.assertion).toContainText("James Bond")
        await this.del.click()
    
    }
}
export default ViewEmployee 