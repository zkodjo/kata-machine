// export default function bs_list(haystack: number[], needle: number): boolean {
//     let low = 0;
//     let high = haystack.length;
//     // go from low to high and find middle point

//     do {
//         const mid = Math.floor(low + (high - low) / 2);
//         console.log({ mid });
//         console.log(Math.floor((low + (high - low)) / 2));
//         const value = haystack[mid];

//         if (value === needle) {
//             return true;
//         } else if (value > needle) {
//             high = mid;
//         } else {
//             low = mid + 1;
//         }
//     } while (low < high);

//     return false;
// }

export default function bs_list_recursive(
    haystack: number[],
    needle: number,
): boolean {
    let l = 0;
    let h = haystack.length;
    if (l === h) {
        return false;
    }

    const m = Math.floor(l + (h - l) / 2);
    const v = haystack[m];

    if (v === needle) {
        return true;
    }

    let newStack: number[];
    if (v > needle) {
        newStack = haystack.slice(0, m);
        return bs_list_recursive(newStack, needle);
    } else {
        newStack = haystack.slice(m + 1);
        return bs_list_recursive(newStack, needle);
    }
}
