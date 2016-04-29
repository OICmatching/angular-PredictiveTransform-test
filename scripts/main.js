angular.module('myApp',[]).controller('MyCtrl' , ['$scope', function($scope){

    $scope.tags = [
        {'tagname':'Web'},
        {'tagname':'プログラム'},
        {'tagname':'デザイン'},
        {'tagname':'モンハン'},
        {'tagname':'モンスト'}
    ];

    $scope.ClickFunction = function(val) {
   angular.element(document.querySelector('#value')).text(val);
 }
}]);
