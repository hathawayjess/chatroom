var app = angular.module('chatroom', []);

angular.module('chatroom').filter('format', function() {
	return function(date) {
		return moment(date).format('ddd, h' + ':' + 'mmA');
	}
});

app.config(function($httpProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');
});
