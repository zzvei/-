const threeSum = arr => {
    const set = new Set();
    arr = arr.sort((a, b) => a - b)
    const res = [];
    // O(n)
    for (let i = 0; i < arr.length - 1; i++) {
        let m = i + 1, n = arr.length - 1;
        while (m < n) {
            const find = 0 - (arr[n] + arr[m])
            if (find == arr[i]) {
                res.push([arr[i], arr[m], arr[n]])
                m++;
                n--
            } else if (find < arr[i]) {
                n--
            } else if (find > arr[i]) {
                m++
            }
        }


        while (arr[i + 1] == arr[i]) {
            i++
        }
    }
    return res
}


console.log(threeSum([-1, 0, 1, 2, -1, -4]))
