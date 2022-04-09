class SchoolMember {
  name: string;
  age: number;
}

export class SchoolStudent extends SchoolMember {
  constructor(name: string, age: number) {
    super();
    this.age = age;
    this.name = name;
  }
}
