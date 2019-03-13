var repo = () => {
    
    var db = {};

    var get = (id) => {
        console.log('Getting task ' + id);
        return {
            name :'new task from db'
        }        
    }

    var save = function (task) {
        console.log('Saving ' + task.name + ' to the db');
    }

    console.log('newing up task repo');
    return {
        get: get,
        //save: save,
        //save: () => console.log('asdasdasd')
        save: () => {
                        console.log('saving now'); return { isSaved: true};
                    }
    }
}
module.exports = repo;

// module.exports = () => {
    
//     var db = {};

//     var get = (id) => {
//         console.log('Getting task ' + id);
//         return {
//             name :'new task from db'
//         }        
//     }

//     var save = function (task) {
//         console.log('Saving ' + task.name + ' to the db');
//     }

//     console.log('newing up task repo');
//     return {
//         get: get,
//         //save: save,
//         //save: () => console.log('asdasdasd')
//         save: () => {console.log('saving now'); return { isSaved: true}}
//     }
// };