class EventEmitter {
    constructor() {
        this.events = {};
    }
    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
    }
    emit(eventName, data) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(callback => {
                callback(data);
            });
        }
    }
}
const emitter = new EventEmitter();
emitter.on("studentRegistered", (student) => {
    console.log("Student Registered Successfully!");
    console.log("Student Name:", student.name);
    console.log("Roll Number:", student.rollNo);
});
emitter.on("studentLogout", (student) => {
    console.log(student.name, "has logged out successfully.");
});
emitter.emit("studentRegistered", {
    name: "Anivaran",
    rollNo: 27
});
emitter.emit("studentLogout", {
    name: "Anivaran"
});