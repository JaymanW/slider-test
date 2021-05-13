const findEmptyIndex = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "") {
            return i;
        }
    }
}

export default findEmptyIndex