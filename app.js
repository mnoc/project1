angular.module('myApp', [
    'ngRoute',
    'lumx'
])



    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/view1'});
    }])


    .controller('myCtrl', ['$scope', function($scope) {

    }]);