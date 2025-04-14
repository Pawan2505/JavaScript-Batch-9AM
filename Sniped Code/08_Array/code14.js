let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];
let merged = [];
let i = 0,
  j = 0;

while (i < arr1.length && j < arr2.length) {
  if (arr1[i] < arr2[j]) {
    merged.push(arr1[i]);
    i++;
  } else {
    merged.push(arr2[j]);
    j++;
  }
}


while (i < arr1.length) merged.push(arr1[i++]);
while (j < arr2.length) merged.push(arr2[j++]);

console.log("Merged Sorted Array:", merged);
