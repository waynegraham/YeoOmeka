require.config({
	baseUrl: "themes/<%= userInput.themeDir %>/js",
	paths: {
		jquery: "../../../javascripts/vendor/jquery/jquery"
	}
});

require(['jquery'], function($) {
	console.log('Working!!');
});
