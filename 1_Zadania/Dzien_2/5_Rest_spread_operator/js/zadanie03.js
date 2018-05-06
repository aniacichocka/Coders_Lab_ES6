let people = [
    {
        person: "Kim Yoo Suk",
        profession: "tyczkarz"
    },
    {
        person: "Sue Yoo",
        profession: "prawnik"
    },
    {
        person: "Dr. Alden Cockburn",
        profession: "urolog"
    },
    {
        person: "Rusty Kuntz",
        profession: "trener"
    }
];

let setFunnyName = (...args) => {
    var arr1 = [...people, ...args];
    console.log(arr1);
}
// setFunnyName([1,2,3,4]);
setFunnyName(...[{o:'1', t:'2'}, {f:'4',s:'6'}]);
