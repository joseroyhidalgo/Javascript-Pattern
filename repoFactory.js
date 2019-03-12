var repoFactory = function () {
    this.getRepo = function (repoType){
        if(repoType === 'task'){
            console.log('ssss');
            var taskRepo = require('./taskRepository');
            return taskRepo;
        }
    }
};
module.exports = new repoFactory();