function displayMatrix() {
    const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

    let result = "";
    
    // Nested loops for row and column
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            result += `matrix[${i}][${j}] = ${matrix[i][j]}\n`;
        }
    }

    // Display result in the <pre> tag
    document.getElementById("result").innerText = result;
}
