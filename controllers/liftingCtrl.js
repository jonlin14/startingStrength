myApp.controller('liftingCtrl', function liftingCtrl($scope) {
  $scope.squatArray = [];
  $scope.deadliftArray = [];
  $scope.militaryPressArray = [];

  $scope.addNumbers = function() {
    $scope.squatArray.push($scope.squat);
    $scope.deadliftArray.push($scope.deadlift);
    $scope.militaryPressArray.push($scope.militaryPress);
  }

});
