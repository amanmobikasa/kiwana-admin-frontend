// filter the data in the array 
export const globalFilterData = (data: any, updateObj: any) => {
    return data.map((el : any) => parseInt(el.id )=== parseInt(updateObj.id) ? {...el, ...updateObj} : el);
}


// example of how to use globalFilterData function

// const data = [
//     {id: "1", name: "John", age: 25},
//     {id: "2", name: "Jane", age: 30},
//     {id: "3", name: "Bob", age: 35},
// ]

// const updatedData = globalFilterData(data, {id: "2", name: "Jen"})

// console.log(updatedData) // will output [{id: "1", name: "John", age: 25}, {id: "2", name: "Jen", age: 30}, {id: "3", name: "Bob", age: 35}]

