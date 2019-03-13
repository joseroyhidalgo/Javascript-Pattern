// class Task {
//     constructor(name){
//         this.name = name;
//         this.completed = false;       
//     };
//     complete(){
//         console.log('completing task: ' + this.name);
//         this.completed = true;
//     };

//     save(){
//         console.log('saving Task: '+ this.name);
//     };
// }
// var task1 = new Task('create a demo for constructor');
// var task2 = new Task('create a demo for modules');
// var task3 = new Task('create a demo for singletons');
// var task4 = new Task('create a demo for prototypes');

// task1.complete();
// task2.save();
// task3.save();
// task4.save();


class Task {
    constructor(name){
        this.name = name;
        this.completed = false;
        this.num = 0;
        console.log(this.name);
        // this.timer = setInterval( function add() {
        //     this.num++;
        //     console.log(this.num);
        // }.bind(this), 1000)

        // this.timer = setInterval( function() {
        //     this.num++;
        //     console.log(this.num);
        // }.bind(this), 1000)

        // this.timer = setInterval( () => {
        //     this.num++;
        //     console.log(this.num);
        // }, 1000)
    }

    complete () {
        console.log('completing Task: ' + this.name);
        this.completed = true;
    }

    save () {
        console.log('saving Task: ' + this.name);
    }
}

module.exports  = Task;

//module.exports = new Task('sss');
// new Task('wwww').complete();
// console.log(sss);