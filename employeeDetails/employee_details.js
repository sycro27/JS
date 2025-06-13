const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'Javascript' },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'Python' },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Java' },
  ];
  
  // Display all employees
  function displayEmployees() {
    const totalEmployees = employees
      .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}: ${employee.specialization}</p>`)
      .join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
  }
  
  // Calculate total salaries
  function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
  }
  
  // Display HR employees
  function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees
      .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}: ${employee.specialization}</p>`)
      .join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
  }
  
  // Find employee by ID
  function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
      document.getElementById('employeesDetails').innerHTML =
        `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}, ${foundEmployee.specialization}</p>`;
    } else {
      document.getElementById('employeesDetails').innerHTML = 'No employee has been found with this ID';
    }
  }
  
  function findbySpecialization(spec) {
    const foundEmployees = employees.filter(employee => employee.specialization.toLowerCase() === spec.toLowerCase());
    if (foundEmployees.length > 0) {
      const display = foundEmployees
        .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}, ${employee.specialization}</p>`)
        .join('');
      document.getElementById('employeesDetails').innerHTML = display;
    } else {
      document.getElementById('employeesDetails').innerHTML = 'No employee found';
    }
  }
  