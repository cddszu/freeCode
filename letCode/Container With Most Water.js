/**
给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let i = 0,j = height.length-1;
  let maxArea = 0
  let w,h;
  while(i<j) {
    w=j-i;
    h = Math.min(height[i], height[j]);
    maxArea = Math.max(maxArea, w*h);
    height[i] < height[j] ? i++ : j--
  }
  return maxArea
};