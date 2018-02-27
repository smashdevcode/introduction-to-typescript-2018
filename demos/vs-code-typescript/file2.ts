
interface MyInterface {
  name: string
}

class MyClass implements MyInterface {
  constructor(public name: string, private age: number) {}
}
