// You are given an m x n matrix mat and two integers r and c representing the row number and column number of the wanted reshaped matrix.
// The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.
// If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

var matrixReshape = function (mat, r, c) {
    // If not legal size return mat
    if (mat.length * mat[0].length !== r * c) return mat;

    const arr = mat.flat();
    const res = [];

    while (arr.length) {
        res.push(arr.splice(0, c));
    }

    return res;
};