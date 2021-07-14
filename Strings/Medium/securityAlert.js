var alertNames = function (keyName, keyTime) {
    const map = new Map();
    const inTrouble = new Set();

    // Add each name to map and freq they were logged with times
    for (let i = 0; i < keyName.length; i++) {
        if (!map.has(keyName[i])) {
            map.set(keyName[i], []);
        }

        map.get(keyName[i]).push(keyTime[i]);
    }

    for (const [person, times] of map.entries()) {
        if (times.length < 3) continue;

        times.sort((a, b) => convertTimes(a) - convertTimes(b));

        for (let i = 2; i < times.length; i++) {
            if (convertTimes(times[i]) - convertTimes(times[i - 2]) <= 60) {
                inTrouble.add(person);
                break;
            }
        }
    }

    return [...inTrouble].sort();
};

const convertTimes = (time) => {
    const [hh, mm] = time.split(":");

    const res = parseInt(mm) + (parseInt(hh) * 60);

    return res;
};
console.log(alertNames(["daniel", "daniel", "daniel", "luis", "luis", "luis", "luis"], ["10:00", "10:40", "11:00", "09:00", "11:00", "13:00", "15:00"]));