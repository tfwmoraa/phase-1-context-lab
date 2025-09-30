/* Your Code Here */// 
// 1. createEmployeeRecord
function createEmployeeRecord(arr) {
  return {
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour: arr[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}

// 2. createEmployeeRecords
function createEmployeeRecords(arrays) {
  return arrays.map(createEmployeeRecord)
}

// 3. createTimeInEvent (uses `this`)
function createTimeInEvent(dateTime) {
  const [date, hour] = dateTime.split(" ")
  this.timeInEvents.push({
    type: "TimeIn",
    date,
    hour: parseInt(hour, 10)
  })
  return this
}

// 4. createTimeOutEvent (uses `this`)
function createTimeOutEvent(dateTime) {
  const [date, hour] = dateTime.split(" ")
  this.timeOutEvents.push({
    type: "TimeOut",
    date,
    hour: parseInt(hour, 10)
  })
  return this
}

// 5. hoursWorkedOnDate
function hoursWorkedOnDate(soughtDate) {
  const timeIn = this.timeInEvents.find(e => e.date === soughtDate)
  const timeOut = this.timeOutEvents.find(e => e.date === soughtDate)
  return (timeOut.hour - timeIn.hour) / 100
}

// 6. wagesEarnedOnDate
function wagesEarnedOnDate(date) {
  return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

// 7. allWagesFor
function allWagesFor() {
  const eligibleDates = this.timeInEvents.map(e => e.date)

  return eligibleDates.reduce((memo, d) => {
    return memo + wagesEarnedOnDate.call(this, d)
  }, 0)
}

// 8. findEmployeeByFirstName
function findEmployeeByFirstName(srcArray, firstName) {
  return srcArray.find(e => e.firstName === firstName)
}

// 9. calculatePayroll
function calculatePayroll(empRecords) {
  return empRecords.reduce((total, rec) => {
    return total + allWagesFor.call(rec)
  }, 0)
}

// export everything for the tests
module.exports = {
  createEmployeeRecord,
  createEmployeeRecords,
  createTimeInEvent,
  createTimeOutEvent,
  hoursWorkedOnDate,
  wagesEarnedOnDate,
  allWagesFor,
  findEmployeeByFirstName,
  calculatePayroll
}
