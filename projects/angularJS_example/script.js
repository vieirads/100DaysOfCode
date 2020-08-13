function TodoListController($scope) {
    $scope.todos = [
        {chore: 'Create this app', time: 1, done: false},
        {chore: 'Make it work properly', time: 1, done: false},
        {chore: 'Put time in hours:minutes:seconds', time: 2, done: false},
        {chore: 'Make the delete button works', time: 2, done: false},
        {chore: 'Make the coundown of the current chore', time: 3, done: false}
    ];

    $scope.addChore = function() {
        $scope.todos.push({
            chore: $scope.todo.chore,
            time: $scope.todo.time,
            done: false
        });
        $scope.todo.chore = $scope.todo.time = '';
    };

    $scope.delChore = function() {
        
    }

    $scope.totalTime = function() {
        let count = 0;
        for (todo of $scope.todos) {
            count += todo.time;
        }
        return count;
    }

    $scope.completedChores = function() {
        let count = 0;
        for (todo of $scope.todos) {
            count += todo.done ? 1 : 0;
        };
        return count;
    };

    $scope.ellapsedTime = function() {
        let count = 0;
        for (todo of $scope.todos) {
            if (todo.done) {
                count += todo.time;
            }
        };
        return count;
    };

    
}