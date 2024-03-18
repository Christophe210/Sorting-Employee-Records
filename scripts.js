class Employee {
    constructor(emp_id, name, department, salary) {
        this.emp_id = emp_id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
}

function selectionSortEmployees(employees, key='emp_id', ascending=true) {
    const n = employees.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (ascending ? employees[j][key] < employees[minIndex][key] : employees[j][key] > employees[minIndex][key]) {
                minIndex = j;
            }
        }
        if (i !== minIndex) {
            [employees[i], employees[minIndex]] = [employees[minIndex], employees[i]];
        }
    }
    return employees;
}

const employees = []; // Array to hold employee records

// Function to add a new employee
function addEmployee() {
    const empId = parseInt(document.getElementById('emp-id').value);
    const empName = document.getElementById('emp-name').value.trim();
    const empDept = document.getElementById('emp-department').value.trim();
    const empSalary = parseInt(document.getElementById('emp-salary').value);

    if (empId && empName && empDept && empSalary) {
        const newEmployee = new Employee(empId, empName, empDept, empSalary);
        employees.push(newEmployee);
        selectionSortEmployees(employees, 'emp_id', true);
        displayEmployees(employees);
        // Clear input fields after adding employee
        document.getElementById('emp-id').value = '';
        document.getElementById('emp-name').value = '';
        document.getElementById('emp-department').value = '';
        document.getElementById('emp-salary').value = '';
    } else {
        alert("Please fill in all fields.");
    }
}

// Function to display sorted employee records
function displayEmployees(employees) {
    const employeeList = document.getElementById('employee-list');
    employeeList.innerHTML = ''; // Clear existing content
    employees.forEach(emp => {
        const empInfo = document.createElement('div');
        empInfo.innerHTML = `
            <p><strong>Name:</strong> ${emp.name}</p>
            <p><strong>Employee ID:</strong> ${emp.emp_id}</p>
            <p><strong>Department:</strong> ${emp.department}</p>
            <p><strong>Salary:</strong> ${emp.salary}</p>
            <hr>
        `;
        employeeList.appendChild(empInfo);
    });
}
