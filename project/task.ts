import { Log } from "./log";
import { Worker } from "./worker";

interface ITask {
  name: string;
  worker: Worker;
  logs: Log[];
  complete: boolean;
}

export class Task implements ITask {
  name: string;
  worker: Worker;
  logs: Log[];
  totalDuration: number;
  complete: boolean;
  constructor(name, worker, logs, complete) {
    this.name = name;
    this.worker = worker;
    this.logs = logs;
    this.complete = complete;
    let totalDuration = [];
    logs.forEach(element => {
      totalDuration.push(element.duration);
    });
    this.totalDuration = totalDuration.reduce((a, b) => a + b);
  }
  addLog(name, worker, duration) {
    let newLog = new Log(name, worker, duration);
    return this.logs.push(newLog);
  }
}

const vasya: Worker = new Worker("Vasya", "url1");
const petya: Worker = new Worker("Petro", "url2");
const ivan: Worker = new Worker("Ivan", "url3");
const log1 = new Log("log1", vasya.name, 30);
const log2 = new Log("log2", petya.name, 20);

const task1 = new Task("task1", [vasya, ivan], [log1, log2], true);
const task2 = new Task("task2", [petya, ivan], [log2], false);
task1.addLog("log3", ivan.name, 10);

console.log(task1);
