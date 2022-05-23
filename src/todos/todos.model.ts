export class Todo {
  constructor(
    public id: string,
    public content: string,
    public category: string,
    public done = false
  ) {}
}

export interface TodoCreator {
  content: string;
  category: string;
}
