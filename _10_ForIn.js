const person = {
    name: 'Mosh',
    age: 30
};

for (let key in person){
    console.log(key+" "+person[key])
}

const colors = ['red','green','blue'];

for (let index in colors){
    console.log(colors[index])
}
