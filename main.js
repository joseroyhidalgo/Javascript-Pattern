/* Calling a function */
// var Task = require('./task');

// var task1 = new Task('create a demo for constructor');
// var task2 = new Task('create a demo for modules');
// var task3 = new Task('create a demo for singletons');
// var task4 = new Task('create a demo for prototypes');

// task1.complete();
// task2.save();
// task3.save();
// task4.save();

/* calling Class */
var Task = require('./class.js');
var task = new Task('ssss');
task.complete();
//var sss = Task;


/* calling get return */
//var Repo = require('./taskRepository.js');
//var s1 = Repo().get();
//var s2 = Repo().save();
//console.log(s2.isSaved);
