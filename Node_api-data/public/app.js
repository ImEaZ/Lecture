angular.module('todoApp', [])
  .controller('TodoListController', function($http) {
    var todoList = this

      todoList.sub = function (input) {
        var Schema = {
          word : input
        }
        GetData(Schema)
      }

      function GetData (data) {
        $http.post('/api/data', data) 
        .then(function success (response) {
          alert('Success')
          console.log(data)
        }, function error (response) {
          alert(response.data.message)
        })
      }
  })