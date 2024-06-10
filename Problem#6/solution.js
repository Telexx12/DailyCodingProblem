class Node{
    constructor(data){
        this.data = data;
        this.both = 0;
    }
}

class XORList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.nodes = [];
    }

    addElement(data){
        let node = new Node(data);

        if(this.nodes.length == 0){
            this.head = node;
            this.tail = node;
        }else{
        }
    }
}



let list = new XORList();

list.teszt();