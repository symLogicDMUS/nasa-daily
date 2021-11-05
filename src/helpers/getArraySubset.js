export function getArraySubset(array, numElem) {
    if (array.length > numElem) {
        const subset = [];
        for (let i = 0; i < numElem; i++) {
            subset.push(array[Math.floor(Math.random() * array.length)]);
        }
        return subset;
    } else {
        return array;
    }
}
