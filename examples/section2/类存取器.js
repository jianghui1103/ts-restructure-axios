var passcode = 'zheshipass';
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode === 'zheshipass') {
                this._fullName = newName;
            }
            else {
                console.log('error');
            }
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var employee = new Employee();
employee.fullName = '222';
if (employee.fullName) {
    console.log(employee.fullName);
}
