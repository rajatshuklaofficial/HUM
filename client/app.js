var app = angular.module("uefa", []);
app.controller("myCtrl", function($http,$scope) {
	$scope.firstpage=false;
	$http.get("/teams")
    .then(function(response) {
    $scope.teams = response.data
});
    $scope.fun=function() {
    	$scope.groups=[]
    	$http.get("/groups")
    	.then(function (res) {
    		$scope.A=res.data.A
            $scope.B=res.data.B
            $scope.C=res.data.C
            $scope.D=res.data.D
            $scope.E=res.data.E
            $scope.F=res.data.F
            $scope.G=res.data.G
            $scope.H=res.data.H
    		
    	})
    }
});