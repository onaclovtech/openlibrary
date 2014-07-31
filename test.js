var app = angular.module('myapp',['book'])

.controller('testCtrl', [function testCtrl($scope,$book)
{
    $scope.book = $book.$search('0786918063');
}]);
