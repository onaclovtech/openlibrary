openlibrary
===========

Service for making openlibrary calls using their API

Additional Notes
=================
Using OpenLibrary in your own app is easy now.

Simply reference email in your module:

     var app = angular.module('myapp', ['openlibrary']);

and then $email in your controller:

     function MyController($scope, $book)
     
Finally request a book:

     $library.search.isbn.json(isbn);

If you'd like to create a service for another book data provider

Right now we'll call this version 0.1 but eventually the send will be locked down for all future releases and we'll have a 1.0 release.
