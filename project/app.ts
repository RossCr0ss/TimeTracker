import { Log } from "./log";
import { Worker } from "./worker";
import { Task } from "./task";

class App {
  alltasks: Task[];
  completedTasks: Task[];
  generalTasksDuration: number;
  workers: Worker[];
  constructor() {}
}

const vasya: Worker = new Worker("Vasya", "url1");
const petya: Worker = new Worker("Petro", "url2");
const ivan: Worker = new Worker("Ivan", "url3");
const log1 = new Log("log1", vasya.name, 30);
const log2 = new Log("log2", petya.name, 20);

const task1 = new Task("task1", [vasya, ivan], [log1, log2], true);
task1.addLog("log3", ivan.name, 10);

const app1 = new App();
