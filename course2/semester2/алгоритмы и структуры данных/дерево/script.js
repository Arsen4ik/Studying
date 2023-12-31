class Tree {
    constructor(root){
        this.key = root
        this.leftChild = null
        this.rightChild = null
    }
    insertLeft(left){
        this.leftChild = new Tree(left)
    }
    insertRight(right){
        this.rightChild = new Tree(right)
    }

    getLeftChild(){
        return this.leftChild
    }
    getRightChild(){
        return this.rightChild
    }
    showAllElements(){
        // while(this.key !== null){
            
            let cnt = 0
        // }
        function func(keey, el){
            // console.log(keey)
            if(keey.rightChild == null && keey.leftChild == null){

                keey.key == el ? ++cnt : cnt;


                console.log(cnt)
                return cnt
            } else {

                console.log(keey.key)
                keey.key == el ? ++cnt : cnt;
                console.log(cnt)


                if(keey.rightChild !== null){
                    console.log(keey.rightChild)
                    func(keey.rightChild, el)
                }
                if(keey.leftChild !== null){
                    console.log(keey.rightChild)
                    func(keey.leftChild, el)
                }
            }
        }
        func(this, 'a')
        return cnt
    }
}

let tree = new Tree('a')

// tree
// console.log(tree.key)

// tree.leftChild = new Tree('глава 1')
// tree.rightChild = new Tree('глава 2')


tree.insertLeft('a')
tree.insertRight('a')

// tree
// console.log(tree.leftChild)


// console.log(tree.getLeftChild())

tree.getLeftChild().insertLeft('s')
tree.getLeftChild().insertRight('a')

tree.getRightChild().insertLeft('a')
tree.getRightChild().insertRight('z')


// tree.getLeftChild().getLeftChild().insertLeft('j')
// tree.getRightChild().getRightChild().insertRight('s')

tree

// console.log(tree.getLeftChild().getLeftChild())
// console.log(tree.getRightChild().getRightChild())


////

console.log(tree.showAllElements())