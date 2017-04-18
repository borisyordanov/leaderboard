// Define the `LeaderboardApp` module
var LeaderboardApp = angular.module('LeaderboardApp', []);

// Define the `PhoneListController` controller on the `LeaderboardApp` module
LeaderboardApp.controller('UserListController', function PhoneListController($scope, $http) {
  $scope.sort = 'alltime';
  $scope.sortReverse = false;

  $http.get("http://fcctop100.herokuapp.com/api/fccusers/top/recent")
    .then(response => {

      var data = response.data;
      $scope.users = [];

      data.forEach(user => {

        $scope.users.push({

          username: user.username,
          img: user.img,
          recent: user.recent,
          alltime: user.alltime

        });

      });
      
    });

});

