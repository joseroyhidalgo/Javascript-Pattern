// var Task = function(name){
//     this.name = name;
//     this.completed = false;

//     this.complete = function() {
//         console.log('completing task: '+ this.name);
//     }

//     this.save = function() {
//         console.log('saving Task: ' + this.name);
//     }
// }


//// refactor the above to Prototype which is more efficient.

var Task = function(data){
    this.name = data.name;
    this.completed = false;
}

Task.prototype.complete = function () {
    console.log('completing Task: ' + this.name);
    this.completed = true;
};

Task.prototype.save = function () {
    console.log('saving Task: ' + this.name);
};

module.exports = Task;