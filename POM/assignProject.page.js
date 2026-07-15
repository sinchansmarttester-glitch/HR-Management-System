class AssignProject
{
    constructor(page)
    {
        this.assignProjectLink=page.locator("//a[@href='assign.php']")
        this.employeeID=page.locator("//input[@placeholder='Employee ID']")
        this.projectName=page.locator("//input[@name='pname']")
        this.date=page.locator("//input[@name='duedate']")
        this.submitBtn=page.locator("//button[@type='submit']")
    }
    async assignProject(empId,pName,dates)
    {
       await this.assignProjectLink.click()
       await this.employeeID.fill(empId)
       await this.projectName.fill(pName)
       await this.date.fill(dates)
       await this.submitBtn.click()
    }
}
export default AssignProject