const swap = (array, indexOne, indexTwo) => {
    let newArray = array.slice();

    let temp = newArray[indexOne];
    newArray[indexOne] = newArray[indexTwo];
    newArray[indexTwo] = temp;
    return newArray;
}

export default swap