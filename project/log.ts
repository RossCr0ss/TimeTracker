import { Worker } from "./worker";

interface ILog {
  name: string;
  worker: Worker;
  duration: number;
}

export class Log implements ILog {
  name: string;
  worker: Worker;
  duration: number;
  totalDuration: number;
  constructor(name, worker, duration) {
    this.name = name;
    this.worker = worker;
    this.duration = duration;
  }
}
