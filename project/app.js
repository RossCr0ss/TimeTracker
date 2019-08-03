"use strict";
exports.__esModule = true;
var log_1 = require("./log");
var worker_1 = require("./worker");
var task_1 = require("./task");
var App = /** @class */ (function () {
    function App() {
        this.workers.forEach(function (element) {
            console.log(element);
        });
    }
    return App;
}());
var vasya = new worker_1.Worker("Vasya", "url1");
var petya = new worker_1.Worker("Petro", "url2");
var ivan = new worker_1.Worker("Ivan", "url3");
var log1 = new log_1.Log("log1", vasya.name, 30);
var log2 = new log_1.Log("log2", petya.name, 20);
var task1 = new task_1.Task("task1", [vasya, ivan], [log1, log2], true);
task1.addLog("log3", ivan.name, 10);
var app1 = new App();
