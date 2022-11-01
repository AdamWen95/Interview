// 堆排序
const heapSort = (arr: number[]) => {
  // 调整堆
  const heapify = (arr: number[], index: number, len: number) => {
    const left = 2 * index + 1; // 左子节点
    const right = 2 * index + 2; // 右子节点
    let largest = index;
    // 找出index和其左右子节点中最大的
    if (left < len && arr[left] > arr[largest]) {
      largest = left;
    }
    if (right < len && arr[right] > arr[largest]) {
      largest = right;
    }
    if (largest !== index) {
      // 交换
      [arr[index], arr[largest]]  = [arr[largest], arr[index]];
      // 继续递归，调整index为root的堆
      heapify(arr, largest, len);
    }
  }

  let length = arr.length;

  // 建堆
  for (let i = Math.floor(length / 2); i >= 0; i--) {
    heapify(arr, i, length);
  }
  for (let i = length - 1; i > 0; i--) {
    // 输出堆顶元素
    [arr[i], arr[0]] = [arr[0], arr[i]];
    length--;
    // 继续调整剩下的元素为大顶堆
    heapify(arr, 0, length);
  }
  return arr
}

// 冒泡排序
const bubbleSort = (arr: number[]) => {
  const len = arr.length;
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}