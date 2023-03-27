const employee = {
    name: "Ryan",
    streetName: "1101 Count Court"
};
function updateEmployeeWithKeyAndValue(employee, name, streetName) {
    const newEmployee = {...employee}; 
    newEmployee[name] = streetName;
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, streetName) {
    employee[name] = streetName;
    return employee
}
function deleteFromEmployeeByKey(employee, name, streetName) {
    const newEmployee = {...deleteFromEmployeeByKey};
    delete {...employee.name};
    return newEmployee;
}    
function destructivelyDeleteFromEmployeeByKey(employee, streetName) {
    const newEmployee = {destructivelyDeleteFromEmployeeByKey};
    delete employee[streetName];
    return employee;
}
console.log(employee)