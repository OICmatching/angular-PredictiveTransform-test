angular.module('myApp',[]).controller('MyCtrl' , ['$scope', function($scope){

    $scope.tags = [
        {'tagname':'Web'},
        {'tagname':'プログラム'},
        {'tagname':'デザイン'},
        {'tagname':'モンハン'},
        {'tagname':'モンスト'}
    ];
}]);
