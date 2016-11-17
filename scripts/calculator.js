/**
 * Created by RFreeman on 11/16/2016.
 */
angular.module('CalculatorApp', [])
    .controller('CalculatorController', function($scope) {
        $scope.result =  function() {
            switch ($scope.op) {
                case '+': {
                    return $scope.x + $scope.y;
                    break;
                }
                case '-': {
                    return $scope.x - $scope.y;
                    break;
                }
                case '*': {
                    return $scope.x * $scope.y;
                    break;
                }
                case '/': {
                    return $scope.x / $scope.y;
                    break;
                }
                    default: {
                        return 'Enter 2 numbers';
                        break;
                    }
            }
        };
});
