/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */
  minDepth() {
    if (!this.root) return 0;

    let queue = [[this.root, 1]];

    while (queue.length) {
      let [node, depth] = queue.shift();

      if (!node.left && !node.right) {
        return depth;
      }

      if (node.left) queue.push([node.left, depth + 1]);
      if (node.right) queue.push([node.right, depth + 1]);
    }
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */
  maxDepth() {
    function findMaxDepth(node) {
      if (!node) return 0;
      let leftDepth = findMaxDepth(node.left);
      let rightDepth = findMaxDepth(node.right);
      return 1 + Math.max(leftDepth, rightDepth);
    }

    return findMaxDepth(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */
  maxSum() {
    let result = { max: -Infinity };

    function findMaxSum(node) {
      if (!node) return 0;

      let leftSum = findMaxSum(node.left);
      let rightSum = findMaxSum(node.right);

      let maxChildSum = Math.max(leftSum, rightSum);
      let maxSinglePathSum = Math.max(node.val, node.val + maxChildSum);
      let maxCompletePathSum = Math.max(maxSinglePathSum, node.val + leftSum + rightSum);

      result.max = Math.max(result.max, maxCompletePathSum);

      return maxSinglePathSum;
    }

    findMaxSum(this.root);
    return result.max;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */
  nextLarger(lowerBound) {
    if (!this.root) return null;

    let queue = [this.root];
    let result = null;

    while (queue.length) {
      let node = queue.shift();
      if (node.val > lowerBound) {
        if (result === null || node.val < result) {
          result = node.val;
        }
      }

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return result;
  }
}


module.exports = { BinaryTree, BinaryTreeNode };
