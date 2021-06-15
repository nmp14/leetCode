var maximumUnits = function (boxTypes, truckSize) {
    let units = 0;
    let boxesInTruck = 0;

    boxTypes.sort((a, b) => b[1] - a[1]);
    for (const box of boxTypes) {
        while (box[0] > 0 && boxesInTruck < truckSize) {
            box[0]--;
            units += box[1];
            boxesInTruck++;
        }
        if (boxesInTruck >= truckSize) break;
    }
    return units;
};

console.log(maximumUnits([[5, 10], [2, 5], [4, 7], [3, 9]], 10));