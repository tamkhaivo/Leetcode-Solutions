class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    addChild(data) {
        this.children.push(new Node(data));
    }
}

const bfs = (root) => {
    if (!root) return [];
    const queue = [root];
    const result = [];
    while (queue.length > 0) {
        const node = queue.shift();
        result.push(node.data);
        queue.push(...node.children);
    }
    return result;
};

const dfsPreOrder = (root) => {
    if (!root) return [];
    const result = [root.data];
    for (const child of root.children) {
        result.push(...dfsPreOrder(child));
    }
    return result;
};

const dfsPostOrder = (root) => {
    if (!root) return [];
    let result = [];
    for (const child of root.children) {
        result.push(...dfsPostOrder(child));
    }
    result.push(root.data);
    return result;
};


const root = new Node(1);
root.addChild(2);
root.addChild(3);
root.children[0].addChild(4);
root.children[0].addChild(5);


console.log("BFS:", bfs(root));
console.log("DFS PreOrder:", dfsPreOrder(root));
console.log("DFS PostOrder:", dfsPostOrder(root));
