import swap from './swap'
import findEmptyIndex from './findEmptyIndex'

const scrambleLogic = (array, size) => {
    let tempArray = array.slice();
    const emptyIndex = findEmptyIndex(tempArray);
    let possibleMoves = [];
    
    // Scramble Logic
    if (size === 3) {
        // Size 3 Logic
        if (emptyIndex === 0) {
            possibleMoves = [1, 3];
        } else if (emptyIndex === 1) {
            possibleMoves = [0, 2, 4];
        } else if (emptyIndex === 2) {
            possibleMoves = [1, 5];
        } else if (emptyIndex === 3) {
            possibleMoves = [0, 4, 6];
        } else if (emptyIndex === 4) {
            possibleMoves = [1, 3, 5];
        } else if (emptyIndex === 5) {
            possibleMoves = [2, 4, 8];
        } else if (emptyIndex === 6) {
            possibleMoves = [3, 7];
        } else if (emptyIndex === 7) {
            possibleMoves = [4, 6, 8];
        } else if (emptyIndex === 8) {
            possibleMoves = [7, 5];
        }
    } else if (size === 4) {
        if (emptyIndex === 0) {
            possibleMoves = [1, 4];
        } else if (emptyIndex === 1) {
            possibleMoves = [0, 2, 5];
        } else if (emptyIndex === 2) {
            possibleMoves = [1, 3, 6];
        } else if (emptyIndex === 3) {
            possibleMoves = [2, 7];
        } else if (emptyIndex === 4) {
            possibleMoves = [0, 5, 8];
        } else if (emptyIndex === 5) {
            possibleMoves = [1, 4, 6, 9];
        } else if (emptyIndex === 6) {
            possibleMoves = [2, 5, 7, 10];
        } else if (emptyIndex === 7) {
            possibleMoves = [3, 6, 11];
        } else if (emptyIndex === 8) {
            possibleMoves = [4, 9, 12];
        } else if (emptyIndex === 9) {
            possibleMoves = [5, 8, 10, 13];
        } else if (emptyIndex === 10) {
            possibleMoves = [6, 9, 11, 14];
        } else if (emptyIndex === 11) {
            possibleMoves = [7, 10, 15];
        } else if (emptyIndex === 12) {
            possibleMoves = [8, 13];
        } else if (emptyIndex === 13) {
            possibleMoves = [9, 12, 14];
        } else if (emptyIndex === 14) {
            possibleMoves = [10, 13, 15];
        } else if (emptyIndex === 15) {
            possibleMoves = [11, 14];
        }
    }
        

    const randomSelection = Math.floor(Math.random() * possibleMoves.length);
    const randomMove = possibleMoves[randomSelection];

    tempArray = swap(tempArray, emptyIndex, randomMove);
    return tempArray;
}

export default scrambleLogic