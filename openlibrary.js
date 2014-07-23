// OpenLibrary Book Data Rest API
// This guy should be returning promises of when it successfully send/fails emails.
//      License: MIT

  angular.module('book', []).factory('$book', ['$http', function($http) {
      return { $search : function (isbn)
                  {
                     $scope.method = 'GET';
                     $scope.url = "http://openlibrary.org/search.json?isbn=";
                     $http({method: $scope.method, url: $scope.url + $scope.isbn}).
      success(function(data, status)
      {
        return data;
      });
                  }
            };
    }
  ]);
