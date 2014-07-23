 $scope.addBook = function(e) 
  {
    $scope.method = 'GET';
    $scope.url = "http://openlibrary.org/search.json?isbn=";
    
    $http({method: $scope.method, url: $scope.url + $scope.isbn}).
      success(function(data, status)
      {
        $scope.status = status;
        $scope.data = data;
        if (data["docs"] != "")
        {
          $scope.books.$add({"title":data["docs"][0]["title"], isbn : $scope.isbn});
        }
      }).
      error(function(data, status) 
      {
        $scope.data = data;
        $scope.status = status;
      });
  }
