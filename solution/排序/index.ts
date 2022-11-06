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

// 归并排序
const mergeSort = (arr: number[]) => {
  // 合并2个有序数组
  const merge = (left: number[], right: number[]) => {
    const ret: number[] = [];
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        ret.push(left.shift()!);
      } else {
        ret.push(right.shift()!);
      }
    }
    return ret.concat(left, right);
  }

  if (!arr) return [];
  if (arr.length === 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

/**
 * 插入排序
 * 1. 直接插入排序
 * 2. 希尔排序
 */

/**
 * 直接插入排序
 * a. 先将待排序序列的第1个元素看成是一个有序的子序列；
 * b. 从第2个元素开始，逐个将待排序的元素x与已排序序列[i-1] ~ [0]（从后往前）进行比较；
 * c. 若x小于比较元素，则比较元素向后移动一位；否则，将x插入序列当前位置。
 */
const insertSort = (arr: number[]) => {
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i];
    let j: number;
    for (j = i - 1; j >= 0 && arr[j] > temp; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = temp;
  }
  return arr;
}

/**
 * 希尔排序
 * a. 先将要数组按某个增量step（n/2）分组，所有距离为step的倍数的记录放在同一个组中；
 *    在各组内进行直接插入排序；
 * b. 然后再用一个较小的增量（step/2）对它进行分组，每组再进行直接插入排序；
 *    直至增量减为1，进行直接插入排序后，整体排序完成。
 */   
const shellSort = (arr: number[]) => {
  const len = arr.length;
  let step = len; // 分割增量步长
  while (step > 1) {
    step = Math.floor(step / 2);
    // 插入排序
    for (let i = step; i < len; i++) {
      let temp = arr[i];
      let j: number;
      for (j = i - step; j >= 0 && arr[j] > temp; j = j - step) {
        arr[j + step] = arr[j];
      }
      arr[j + step] = temp;
    }
  }
  return arr;
}