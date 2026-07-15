import { test, expect } from '../Custom Fixure/loginFixure.js'
import AddEmployee from '../POM/addEmployee.page.js'
import LogOut from '../POM/logout.page.js'
import ViewEmployee from '../POM/viewEmployee.page.js'
import { readExcel } from '../utils/excelUtility.js'

test('Login Test', async ({ page, loginFixture }) => {
  await expect(page).toHaveURL('http://49.249.29.4:8081/TestServer/Build/Employee_Management_System//aloginwel.php')
  const employeeData=readExcel('employees.xlsx', 'Employees')
  const employee = employeeData[0]
  const addEmp = new AddEmployee(page)
  const viewEmp = new ViewEmployee(page)
  const logout=new LogOut(page)
  await addEmp.addEmployee(employee.firstname,employee.lastname,employee.emailid,
    employee.birthday,employee.phoneNum,employee.NID,employee.address,
    employee.department,employee.degree,employee.salary)
   await viewEmp.viewEmployee()
   await page.waitForTimeout(5000)
   await logout.logOut()
})