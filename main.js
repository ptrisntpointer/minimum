function min(a, b) {
    if (a < b) return a;
    else return b;
}

console.log(`Between 9,541 & 9,532, the answer is`,
            `${min(9541, 9532)}.`);


console.log(`Between 1,000,000 & 999,999, the answer is`,
            `${min(1000000, 999999)}.`);

console.log(`Between 1,587 & 1,578, the answer is`,
            `${min(1578, 1587)}.`);
