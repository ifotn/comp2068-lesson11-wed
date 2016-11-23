/**
 * Created by RFreeman on 11/23/2016.
 */
// create the angular app and controller
angular.module('TodoApp', [])
    .controller('TodoController', function($scope) {

        // initialize an empty task list
        $scope.tasks = [];

        // add a new task
        $scope.addTodo = function() {
              // add the new task to the array
              $scope.tasks.push($scope.taskName);

            // clear the texbox
            $scope.taskName = '';

            //console.log($scope.taskName);
        };



    });
