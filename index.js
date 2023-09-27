
function updateEmployeeWithKeyAndValue(employee, key, value) {
    
    const updatedEmployee = { ...employee };
   
    updatedEmployee[key] = value;
  
    return updatedEmployee;
  }
  
 
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
   
    employee[key] = value;
   
    return employee;
  }
  
  
  function deleteFromEmployeeByKey(employee, key) {
   
    const updatedEmployee = { ...employee };
   
    delete updatedEmployee[key];
   
    return updatedEmployee;
  }
  
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
   
    delete employee[key];
   
    return employee;
  }
  
  const employee = {
    name: 'John',
    location: 'zarqa',
    
  };
  
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'location', 'amman');
  console.log(updatedEmployee); 
  
  const destructivelyUpdatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'location', 'ajloun');
  console.log(destructivelyUpdatedEmployee); 
  const employeeWithoutAge = deleteFromEmployeeByKey(employee, 'age');
  console.log(employeeWithoutAge); 
  
  const originalEmployee = destructivelyDeleteFromEmployeeByKey(employee, 'name');
  console.log(originalEmployee); 
  
  