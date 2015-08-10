// We have a Call Center with three levels of employees: Respondent, Manager, Director

// An incoming call must be allocated to a free Respondent.
  // If the Respondent cannot handle the call, they must be escalated to a Manager.
    // If a Manager cannot handle the call, they must be escalated to a Director.


// Design the classes and data structures for this problem.

// Implement a method, dispatchCall(), which assigns a call to the first available employee.

// Let's start off with an CallCenter superclass

var CallCenter = function() {
  this.respondents = {escalation: this.managers, staff: []};
  this.managers = {escalation: this.directors, staff: []};
  this.directors = {escalation: null, staff: []};
}

// Hire employees
CallCenter.hireEmployee = function(name, role) {
  var newEmp = new Employee(name, role);
  this[role + 's'].staff.push(newEmp);
  console.log('Hired a new ' + role + ': ' + newEmp);
}

// Accept calls

CallCenter.prototype.dispatchCall = function() {
  // Is the call taken?
  var callIsTaken = false;

  // Subroutine to grab calls
  var routeCalls = function(role) {
    this[role].staff.forEach(function(elem) {
      if (callIsTaken) {
        return;
      } else {
        if (elem.isAvaiable) {
          elem.answerCall();
        }
      }
    })

    if (!callIsTaken) {
      routeCalls(role.escalation);
    }
  }

  routeCalls(this.respondents);
}

var Employee = function(name, role) {
  // Employees have names, right?
  this.name = name;

  // Each employee has its own role, whether that's Respondent, Manager, or Director
  this.role = role;

  // Boolean whether or not this employee is free
  this.isAvailable = true;
}

// Employees can pick up calls:

Employee.prototype.answerCall = function() {
  this.isAvailable = false;
}

// Employees can also finish calls

Employee.prototype.finishCall = function() {
  this.isAvailable = true;
}