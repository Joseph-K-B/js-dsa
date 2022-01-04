
//Marty's solution
function traverse(node, level=0) {
  console.log(' '.repeat(level) + node.value);
  level ++
  for(let child of node.children) {
    traverse(child)
  }
}

const D = {
  value: 'D',
  children: []
};

const B = {
  value: 'B',
  children: [D]
};

const C = {
  value: 'C',
  children: []
};

const F = {
  value: 'F',
  children: []
};

const E = {
  value: 'E',
  children: [F]
};

const A = {
  value: 'A',
  children: [B, C, E]
};