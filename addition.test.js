const { default: TestRunner } = require("jest-runner");
const add = require(`./addition`); //requiring file which when to test (give file path)

test(`returns the addition of both`,()=>{
    expect(add(2,3)).toBe(5);
})