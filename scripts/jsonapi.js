angular.module('myApp',[])
    .controller('MyCtrl', ['$scope','$http', function($scope, $http){
            $scope.test = function(){
                $http.get('./data/taglist.json').success(function(data) {
                $scope.tags = data;
            });
        };

    }]);
