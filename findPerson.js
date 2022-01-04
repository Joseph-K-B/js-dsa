
class PersonTreeNode {
    constructor(person) {
      this.value = person.name;
      this.person = person;
      this.left = null;
      this.right = null;
    }

    add(node) {
      if(node.value < this.value) {
        if(this.left) {
          this.left.add(node);
        } else {
          this.left = node;
        }
      }
      else {
        if(this.right) {
          this.right.add(node);
        } else {
          this.right = node;
        }
      }
    }

    findPerson(name) {
      //compare name value to current node
      if(name === this.value) {
        return this.value
        // move through tree if value is < move left else move right
      } else if (name < this.value && this.left) {
        return this.left.findPerson(name)
        
      } else if (name > this.value && this.right) {
        console.log('going right')
        return this.right.findPerson(name)
        // if person doesnt exist in tree return null
      } else return null
    }
  }

const root = new PersonTreeNode({name: 'Bob'})
const name2 = new PersonTreeNode({name: 'Not Bob'})
const name3 = new PersonTreeNode({name: 'Izzie'})
const name4 = new PersonTreeNode({name: 'Nelson'})
const name5 = new PersonTreeNode({name: 'Nelson Again'})

root.add(name2)
root.add(name3)
root.add(name4)
root.add(name5)

console.log(root)
console.log(root.findPerson('Izzie'), root.findPerson('Not Bob'))

