"use strict";
exports.__esModule = true;
var log_1 = require("./log");
var worker_1 = require("./worker");
var Task = /** @class */ (function () {
    function Task(name, worker, logs, complete) {
        this.name = name;
        this.worker = worker;
        this.logs = logs;
        this.complete = complete;
        var totalDuration = [];
        logs.forEach(function (element) {
            totalDuration.push(element.duration);
        });
        this.totalDuration = totalDuration.reduce(function (a, b) { return a + b; });
    }
    Task.prototype.addLog = function (name, worker, duration) {
        var newLog = new log_1.Log(name, worker, duration);
        return this.logs.push(newLog);
    };
    return Task;
}());
exports.Task = Task;
var vasya = new worker_1.Worker("Vasya", "url1");
var petya = new worker_1.Worker("Petro", "url2");
var ivan = new worker_1.Worker("Ivan", "url3");
var log1 = new log_1.Log("log1", vasya.name, 30);
var log2 = new log_1.Log("log2", petya.name, 20);
var task1 = new Task("task1", [vasya, ivan], [log1, log2], true);
var task2 = new Task("task2", [petya, ivan], [log2], false);
task1.addLog("log3", ivan.name, 10);
console.log(task1);
