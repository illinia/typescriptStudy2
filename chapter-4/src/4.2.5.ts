// type TreeNode = {
//   value: string;
// };
// type LeafNode = TreeNode & {
//   isLeaf: true;
// };
// type InnerNode = TreeNode & {
//   children: [TreeNode] | [TreeNode, TreeNode];
// };

// let a: TreeNode = { value: "a" };
// let b: LeafNode = { value: "b", isLeaf: true };
// let c: InnerNode = { value: "c", children: [b] };

// let a1 = mapNode(a, (_) => _.toUpperCase());
// let b1 = mapNode(b, (_) => _.toUpperCase());
// let c1 = mapNode(b, (_) => _.toUpperCase());

// function mapNode<T extends TreeNode>(node: T, f: (value: string) => string): T {
//   return {
//     ...node,
//     value: f(node.value),
//   };
// }

// type HasSides = { numberOfSides: number };
// type SidesHaveLength = { sideLength: number };

// function logPerimeter<Shape extends HasSides & SidesHaveLength>(
//   s: Shape
// ): Shape {
//   console.log(s.numberOfSides * s.sideLength);
//   return s;
// }
// type Square = HasSides & SidesHaveLength;
// let square: Square = { numberOfSides: 4, sideLength: 3 };
// logPerimeter(square);

// function call<T extends unknown[]>(
//   f: (...args: T) => string[],
//   ...args: T
// ): string[] {
//   return f(...args);
// }
// function fill(value: string, length: number): string[] {
//   return Array.from({ length }, () => value);
// }
// let a = call(fill, "10", 5);
// let b = call(fill, 10);
// let c = call(fill, 10, "a", "z");
