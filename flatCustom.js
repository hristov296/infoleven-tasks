const arr1 = [[2], 3, {}, [1, 2]] // [2, 3, 1, 2]

const arr2 = [2, 3, [[1, { a: "text" }], [[2]]], 5] // [2, 3, 1, "text", 2, 5]

const arr3 = [5, { a: 1 }, [1, [3, {}, { c: "a", d: [2, 2] }], [[6]]]] // [5, 1, 1, 3, "a", 2, 2, 6]


Array.prototype.flatCustom = function () {
  function* flatten(arr) {
    for (const val of arr) {
      if (val === null) {
        yield* flatten([]);
      } else if (Array.isArray(val)) {
        yield* flatten(val)
      } else if (typeof val === 'object') {
        yield* flatten(Object.values(val))
      } else {
        yield val;
      }
    }
  }


  return [...flatten(this)]
}

console.log(arr1.flatCustom());
console.log(arr2.flatCustom());
console.log(arr3.flatCustom());
