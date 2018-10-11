const synaptic = require("synaptic");

let myNetwork = new synaptic.Architect.Perceptron(2, 2, 1)
let trainer = new synaptic.Trainer(myNetwork)

let trainingSet = require("./data.json");


trainer.train(trainingSet,{
	rate: .1,
	iterations: 20000,
	error: .005,
  shuffle: true,
  log:100,
	cost: synaptic.Trainer.cost.CROSS_ENTROPY
});

console.log("TRAINED \n\n");

let fun = (data)=>{
    return trainer.test([{
        input:[data.temperature,data.humidity,data.gas,data.airqual,data.soilmois],
        output:[true]
    }]);
};

module.exports = fun;
// console.log(fun({
//   temperature:27,
//   humidity:46,
//   gas:125,
//   airqual:998,
//   soilmois:-7
// }));