const inquirer = require("inquirer")
const mysql = require('mysql2');
const { printTable } = require("console-table-printer")
const db = mysql.createConnection(
    {
        host: '127.0.0.1',
        user: 'root',
        password: 'password',
        database: 'tracker_db',
        port: 3306
    }
)
db.connect(() => {
    mainMenu()
})
function mainMenu() {
    inquirer.prompt([{
        type: "list",
        name: "menu",
        message: "What would you like to do?",
        choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"],
    }])
        .then(response => {
            if (response.menu === "view all departments") {
                viewDepartments()
            }
            else if (response.menu === "view all roles") {
                viewRoles()
            }
            else if (response.menu === "view all employees") {
                viewEmployee()
            }
            else if (response.menu === "add a department") {
                addDepartment()
            }
            else if (response.menu === "add a role") {
                addRole()
            }
        })
}
function viewDepartments() {
    db.query("select * from department", (err, data) => {
        printTable(data)
        mainMenu()
    })
}
function viewRoles() {
    db.query("select * from role", (err, data) => {
        printTable(data)
        mainMenu()
    })
}
function viewEmployee() {
    db.query("select * from employee", (err, data) => {
        printTable(data)
        mainMenu()
    })
}
function addDepartment() {
    inquirer.prompt({
        type: "input",
        name: "department",
        message: "What is the new department name?"
    })
        .then(response => {
            db.query("insert into department(name) values (?)", [response.department], err => {
                viewDepartments()
            })
        })
}
function addRole() {
    inquirer.prompt([{
        type: "input",
        name: "role",
        message: "What is the new role?"
    },
    {
        type: "input",
        name: "salary",
        message: "what is the salary?"
    },
    {
        type: "input",
        name: "department_id",
        message: "what is the department id?"
    },
    ])
        .then(response => {
            db.query("insert into role(title, salary, department_id) values (?,?,?)", [response.role, response.salary, response.department_id], err => {
                viewRoles()
            })
        })
}