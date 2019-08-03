interface IWorker {
  name: string;
  avatar: string;
}

export class Worker implements IWorker {
  name: string;
  avatar: string;
  constructor(name, avatar) {
    this.name = name;
    this.avatar = avatar;
  }
}
