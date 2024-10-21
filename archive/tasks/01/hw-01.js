var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Direction01_name;
var School01 = /** @class */ (function () {
    function School01() {
        this.directions = [];
    }
    School01.prototype.addDirection = function (direction) {
        this.directions.push(direction);
    };
    return School01;
}());
var Direction01 = /** @class */ (function () {
    function Direction01(name) {
        _Direction01_name.set(this, void 0);
        this.levels = [];
        __classPrivateFieldSet(this, _Direction01_name, name, "f");
    }
    Object.defineProperty(Direction01.prototype, "name", {
        get: function () {
            return __classPrivateFieldGet(this, _Direction01_name, "f");
        },
        enumerable: false,
        configurable: true
    });
    Direction01.prototype.addLevel = function (level) {
        this.levels.push(level);
    };
    return Direction01;
}());
_Direction01_name = new WeakMap();
var Level01 = /** @class */ (function () {
    function Level01(name, program) {
        this.groups = [];
        this.name = name;
        this._program = program;
    }
    Object.defineProperty(Level01.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (val) {
            this._name = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Level01.prototype, "program", {
        get: function () {
            return this._program;
        },
        enumerable: false,
        configurable: true
    });
    Level01.prototype.addGroup = function (group) {
        this.groups.push(group);
    };
    return Level01;
}());
var Student01 = /** @class */ (function () {
    function Student01(firstName, lastName, birthYear) {
        this.grades = {};
        this.attendance = [];
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
    }
    Object.defineProperty(Student01.prototype, "fullName", {
        get: function () {
            return "".concat(this.lastName, " ").concat(this.firstName);
        },
        set: function (value) {
            var _a;
            _a = value.split(' '), this.lastName = _a[0], this.firstName = _a[1];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student01.prototype, "age", {
        get: function () {
            return new Date().getFullYear() - this.birthYear;
        },
        enumerable: false,
        configurable: true
    });
    Student01.prototype.setGrade = function (subject, grade) {
        this.grades[subject] = grade;
    };
    Student01.prototype.markAttendance = function (present) {
        this.attendance.push(present);
    };
    Student01.prototype.getPerformanceRating = function () {
        var gradeValues = Object.values(this.grades);
        if (gradeValues.length === 0) {
            return 0;
        }
        var averageGrade = gradeValues.reduce(function (sum, grade) { return sum + grade; }, 0) / gradeValues.length;
        var attendancePercentage = (this.attendance.filter(function (present) { return present; }).length / this.attendance.length) * 100;
        return (averageGrade + attendancePercentage) / 2;
    };
    return Student01;
}());
var Group01 = /** @class */ (function () {
    function Group01(directionName, levelName) {
        this._students = [];
        this.directionName = directionName;
        this.levelName = levelName;
    }
    Object.defineProperty(Group01.prototype, "students", {
        get: function () {
            return this._students;
        },
        enumerable: false,
        configurable: true
    });
    Group01.prototype.addStudent = function (student) {
        this._students.push(student);
    };
    Group01.prototype.showPerformance = function () {
        var sortedStudents = this._students.toSorted(
        // NOTE: ???  error: 1. Property 'toSorted' does not exist on type 'Student[]'. [2339]
        // const sortedStudents = this._students.sort(
        function (a, b) { return b.getPerformanceRating() - a.getPerformanceRating(); });
        return sortedStudents;
    };
    return Group01;
}());
