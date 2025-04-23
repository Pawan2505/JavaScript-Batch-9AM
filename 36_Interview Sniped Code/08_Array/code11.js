let nested = [1, [2, [3, 4], 5], 6];

function flatten(arr) {
  return arr.flat(Infinity); 
}

console.log("Flattened:", flatten(nested));
