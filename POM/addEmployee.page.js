class AddEmployee
{
    constructor(page)
    {
        this.addEmployeeButton = page.locator("//li/a[@href='addemp.php']")
        this.firstNameInput = page.locator("//input[@placeholder='First Name']")
        this.lastNameInput = page.locator("//input[@placeholder='Last Name']")
        this.emailInput = page.locator("//input[@placeholder='Email']")
        this.birthdayInput = page.locator("//input[@type='date']")     
        this.genderInput = page.getByTitle('GENDER')
        this.genderSelect = page.getByRole('treeitem',{ name: 'Male', exact: true })
        this.phoneInput = page.locator("//input[@placeholder='Contact Number']")
        this.nidInput = page.locator("//input[@placeholder='NID']")
        this.addressInput = page.locator("//input[@placeholder='Address']")
        this.departmentInput = page.locator("//input[@placeholder='Department']")
        this.degreeInput = page.locator("//input[@placeholder='Degree']")
        this.salaryInput = page.locator("//input[@placeholder='Salary']")
        this.submitButton = page.locator("//button[text()='Submit']")
    }
    async addEmployee(firstName,lastName,email,birthday,phone,nid,address,department,degree,salary)
    {
        await this.addEmployeeButton.page().waitForLoadState('networkidle')
        await this.addEmployeeButton.click({ timeout: 60000 })
        await this.firstNameInput.waitFor({ state: 'visible', timeout: 60000 })
        await this.firstNameInput.fill(firstName)
        await this.lastNameInput.fill(lastName)
        await this.emailInput.fill(email)
        await this.birthdayInput.fill(birthday)
        await this.phoneInput.fill(phone)     
        await this.nidInput.fill(nid)
        await this.addressInput.fill(address)
        await this.departmentInput.fill(department)
        await this.degreeInput.fill(degree)
        await this.salaryInput.fill(salary)
         await this.genderInput.click()
        await this.genderSelect.click()
        await this.submitButton.click()
    }
}
export default AddEmployee