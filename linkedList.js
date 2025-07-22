export default class LinkedList {
    constructor(){
        this.list = []
        head = null
        tail = null
        size = 0
    }

    append(value){
        const node = new Node(value)
        this.list.push(node)
        if(this.size === 0){
            head = node
        }
        tail.nextNode = node
        tail = node

        this.size++
    }

    prepend(value){
        const node = new Node(value)
        this.list.push(node)
        if(this.size === 0){
            tail = node
        }
        node.nextNode = head
        head = node

        this.size++
    }
}

class Node {
    constructor(value){
        this.value = value
        this.nextNode = null
    }
}