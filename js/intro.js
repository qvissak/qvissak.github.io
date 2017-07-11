(function() {
	var type = function() {
		var sentence = "Quinn Vissak";
		$("#type-name").typed({
			strings: [sentence],
			typeSpeed: 50,
			showCursor: false
        });
	};
	type();
})();
(function() {
	var type = function() {
		var sentence = "a full stack software developer";
		$("#type-job").typed({
			strings: [sentence],
			typeSpeed: 60,
            startDelay: 1500,
			showCursor: false
        });
	};
	type();
})();
