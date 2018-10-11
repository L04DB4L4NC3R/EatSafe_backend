const synaptic = require("synaptic");

let myNetwork = new synaptic.Architect.Perceptron(2, 2, 1)
let trainer = new synaptic.Trainer(myNetwork)

let trainingSet = [
  {
    input: [0,0,1,1],
    output: [false]
  },
  {
    input: [0,1,2,1],
    output: [false]
  },
  {
    input: [1,0,0,1],
    output: [false]
  },
  {
    input: [1,1,1,1],
    output: [true]
  },
]

trainer.train(trainingSet,{
	rate: .1,
	iterations: 20000,
	error: .005,
  shuffle: true,
  log:100,
	cost: synaptic.Trainer.cost.CROSS_ENTROPY
});

console.log("TRAINED \n\n");

module.exports = (data)=>{
    return trainer.test([{
        input:[data.temperature,data.humidity,data.gas,data.airqual,data.soilmois],
        output:[true]
    }]);
};


