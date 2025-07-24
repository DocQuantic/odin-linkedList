import { default as LinkedList } from "./linkedList.js"

const list = new LinkedList();

list.prepend("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.prepend("turtle");

console.log(list.toString())

console.log(list.at(5))

list.pop()

console.log(list.toString())

console.log(list.contains("fish"))
console.log(list.contains("cat"))

console.log(list.find("hamster"))