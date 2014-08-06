/*
   openlibrary.js v0.0.1
   openlibrary angular service
   Written by Tyson Bailey
*/
// OpenLibrary Book Data Rest API
// This guy should be returning promises of when it successfully send/fails emails.
//      License: MIT

angular.module('book', []).factory('$book', ['$http',
    function($http) {
        // This should eventually become search.json.isbn or .title, or .query.
        // This could theoretically get quite large.
        // any pull requests are welcomed
        _method = 'GET';
        _url = "http://openlibrary.org/search";

        return {
            search: function(number) {
                return $http({
                    method: _method,
                    url: _url + ".json?isbn=" + number
                });
            }
        };
    }
]);

// query types to be added eventually
// From: https://openlibrary.org/dev/docs/api/search
//http://openlibrary.org/search?q=the+lord+of+the+rings
//http://openlibrary.org/search?title=the+lord+of+the+rings
//http://openlibrary.org/search.json?author=tolkien
//http://openlibrary.org/search?q=the+lord+of+the+rings&page=2
