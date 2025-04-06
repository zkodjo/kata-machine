export default function bubble_sort(arr: number[]): void {
    // any xi <= xi+1 is how you know an array is sorted

    // example [1, 3, 7, 4, 2] is unsorted

    // start at zero position
    // if i + 1 is larger than i, swap position
    // 1 is smaller than 3
    // 3 < 7
    // 7 > 4 switch positions
    // 7 > 2 switch positions
    // (n + 1) * n / 2 is always the sum of numbers in an array
    // singular iteration always puts largest item at the last spot

    // outer loop iterates over i through n
    // inner loop iterates over n - 1, n - 1 - 1
    // if array[i] > array[j] swap positions

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
}
