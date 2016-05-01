angular.module('myApp',[]).controller('MyCtrl' , ['$scope', function($scope){

    $scope.tags = [
        {'tagname':'Web'},
        {'tagname':'プログラム'},
        {'tagname':'デザイン'},
        {'tagname':'モンハン'},
        {'tagname':'モンスト'},
        {'tagname':'JQuery'},
        {'tagname':'AngularJS'},
        {'tagname':'Javascript'},
        {'tagname':'Java'}
    ];

    $scope.selectTag = "";
    $scope.ClickFunction = function(val) {
        // angular.element(document.querySelector('#clicktag')).val(val);
        //angular.element()内ではある程度のJqueryが使えるすごい
        $scope.selectTag = val;
 }
}]);
