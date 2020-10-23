/*
CONCEPT

Step 1: Traverse the root node
Step 2: Traverse any neighbour of the root node, that is maintaining a least distance from the root node and insert them in ascending order into the queue.
Step 3: Traverse any neighbour of neighbour of the root node, that is maintaining a least distance from the root node and insert them in ascending order into the queue
Step 4: This process will continue until we get the goal node

ALGORITHM

1: Place the starting node or root node into the queue.

2: If the queue is empty, then stop and return failure.
3: If the first element of the queue is our goal node, then stop and return success.
4: Else, remove the first element from the queue. Expand it and compute the estimated goal distance for each child. Place the children in the queue in ascending order to the goal distance.
take value at x,y and turn it into node. 

figure adjacent nodes:
    get nodes up,down, left, right
    remove nodes that are null
    assign weights:
    up -  (n-(i-1))+3=n-i+4
    left - (n-(j-1))+2=n-j+3 
    right - (n-(j+1)+1=(n-j+2  
    down - (n-(i+1)+0=(n-i)
    sort by weights ascending (smallest first)
    add to the end of PriorityQueue

5: Go to step-3
6: Exit.

https://github.com/VedantKhairnar/The-Maze-Runner

datastructures to use:
PriorityQueue - keep  weigthed nodes. Lesser priority nodes in front; 

array - originally submitted array of 0,1 where 1 is obstacle

@maze [][] array of 0,1
@n - maze height
*/

class Node {
  constructor(x, y, val) {
    this.x = x;
    this.y = y;
    this.val = val;
    this.weight = 0;
    this.id = `${x}:${y}`;
    this.visited = false;
  }

  compare(node) {
    if (node.weight > this.weight) return -1;
    if (node.weight < this.weight) return 1;

    return 0;
  }

  isEqual(node) {
    return node.x == this.x && node.y == this.y;
  }

  getAdjacentNodes() {
    let _this = this;
    return [
      {
        x: _this.x - 1,
        y: _this.y,
        weight: (x, y, n) => {
          return n - x + 4;
        },
      }, //up n-i+4
      {
        x: _this.x + 1,
        y: _this.y,
        weight: (x, y, n) => {
          return n - x;
        },
      }, //down (n-i)
      {
        x: _this.x,
        y: _this.y - 1,
        weight: (x, y, n) => {
          return n - y + 3;
        },
      }, //left
      {
        x: _this.x,
        y: _this.y + 1,
        weight: (x, y, n) => {
          return n - y + 2;
        },
      }, //right
    ];
  }
  toString() {
    return `${this.x}:${this.y} v:${this.val} w:${this.weight}`;
  }
}

class PriorityQueue {
  constructor() {
    this.queue = [];
    this.map = new Map(); // to keep track of nodes in queue
  }

  /*
    @node []
    */
  add(node) {
    this.queue.push(node);
    this.map.set(node.id, node);

    this.queue.sort((a, b) => a.compare(b)); //todo - insertions in places instead of sorting; sort ascending, lesser priority nodes to be in front
  }
  peek() {
    if (this.queue.length > 0) {
      let m = this.queue.shift();
      this.map.get(m.id).visited = true;

      return m;
    }

    return null;
  }

  isEmpty() {
    return this.queue.length == 0 ? true : false;
  }

  lookup(id) {
    return this.map.get(id) === undefined ? null : this.map.get(id);
  }
}

class Maze {
  constructor(maze, n) {
    this.maze = maze;
    this.height = n;
    this.width = maze[0].length;
  }

  getNode(x, y) {
    if (x > -1 && x < this.height && y > -1 && y < this.width) {
      // coordinates are within the range of maze
      return new Node(x, y, this.maze[x][y]);
    }
    return null; // node is out of the range of maze
  }
}

/*
    @m [][] array of 0/1
    @n maze height
*/
function isPathExists(args) {
  // use array form of arguments to align with test assert function
  let [m, n] = args;
  if (m[0].length < 2 && n < 2) return false; // array with one element, nothing to search

  // init our Maze
  var maze = new Maze(m, n);

  //init beginning and end nodes
  var begin = maze.getNode(0, 0);
  var end = maze.getNode(n - 1, m[n - 1].length - 1);

  // init our PriorityQueue with begin node

  var pqueue = new PriorityQueue();

  pqueue.add(begin);

  // start traverse the queue from the first element
  // stop if queue is empty or we ran out of counter;
  let count = 0;
  while (!pqueue.isEmpty() || count > n * 2) {
    // get the first top element

    let node = pqueue.peek();
    console.log(node.toString());

    if (node.isEqual(end)) return true;
    //get its adjacent node coordinates, init as a node,  and for each determine its weight and put it into resulting array
    let adjacentnodes = node.getAdjacentNodes().map((el) => {
      var nn = maze.getNode(el.x, el.y); // find node in maze
      if (nn !== null) nn.weight = el.weight(el.x, el.y, maze.height); // determine its weight based on the function passed as part of node coordinates

      return nn;
    });
    // filter out null and nodes with val=1 and if there is a node in queue with lesser priority and nodes that were already visited (visited==true)
    adjacentnodes = adjacentnodes.filter((x) => {
      if (x !== null && x.val == 0) {
        // for not null nodes and with no obstacles
        var k = pqueue.lookup(x.id);

        return k == null || x.compare(k) == -1 || !k.visited;
      }
      return false;
    });

    // add adjacent queues back to priority queue

    adjacentnodes.forEach((n) => pqueue.add(n));
    count++;
  }

  return false;
}

module.exports = { isPathExists };
