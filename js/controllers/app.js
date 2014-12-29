var treatmentApp = angular.module('treatmentApp', []);

treatmentApp.controller('AppCtrl', ['$scope', function ($scope) {
  $scope.treatments = [
  	{
      code: "001",
      name: "Treatment111"
    },
    {
      code: "002",
      name: "Treatment123"
    },
    {
      code: "003",
      name: "Treatment124"
    },
    {
      code: "004",
      name: "Diabetes"
    }
  ];
}]);