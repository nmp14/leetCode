var displayTable = function (orders) {
    let table = [];
    const map = new Map();
    const foodItems = new Set();

    for (const order of orders) {
        // Add foodItem to set
        foodItems.add(order[2]);

        if (!map.has(order[1])) {
            const orderName = order[2];
            const newMap = new Map();
            newMap.set(order[2], 1);
            // Set value of table order to an object of food items and number ordered.
            // Defaults to 1 of the current food item.
            map.set(order[1], newMap);
            continue;
        }

        // If food item already exists at table order
        // Incremember order number by 1
        if (map.get(order[1]).has(order[2])) {
            // Looks for food item in table order
            // Adds 1 to value of foodItem at the table
            map.get(order[1]).set(order[2], map.get(order[1]).get(order[2]) + 1);

        } else if (!(map.get(order[1]).has(order[2]))) {
            // Default foodItem order number to 1 since it doesnt exist
            map.get(order[1]).set(order[2], 1);
        }
    }

    table.push([...foodItems].sort());
    table[0].unshift("Table");

    const tableOrders = [];

    for (const [key, value] of map.entries()) {
        const currentTable = [];
        currentTable.push(key);

        for (let i = 1; i < table[0].length; i++) {
            if (value.has(table[0][i])) {
                currentTable.push((value.get(table[0][i]).toString()));
                continue;
            }

            currentTable.push((0).toString());
        }

        tableOrders.push(currentTable);
    }

    tableOrders.sort((a, b) => a[0] - b[0]);
    table.push(...tableOrders);

    return table;
};