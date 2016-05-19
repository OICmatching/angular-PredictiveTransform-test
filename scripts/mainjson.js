angular.module('myApp',[]).controller('MyCtrl' , ['$scope', function($scope){

    $scope.selectTag = "";
    $scope.ClickFunction = function(val) {
        angular.element(document.querySelector('#clicktag')).val(val);
        //angular.element()内ではある程度のJqueryが使えるすごい
        $scope.selectTag = val;
 };
}]);
