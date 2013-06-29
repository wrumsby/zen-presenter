YUI.add('zen-slide-source', function (Y) {
	'use strict';

	var RAW_GITHUB = 'https://raw.github.com/';

	function SlideSource() {}

	SlideSource.prototype = {
		getSlides: function (callback) {
			var search = window.location.search,
				queryString = Y.QueryString.parse(search.substring(1)),
				url = queryString.slides + '/slides.js';

			if (url.indexOf(RAW_GITHUB) === 0) {
				url = 'https://rawgithub.com/' + url.substring(RAW_GITHUB.length);
			}

			Y.Get.js(url, function (err, tx) {
				try {
					if (err) {
						return;
					}

					callback(SLIDES);
				} finally {
					tx.purge();
				}
			});
		}
	};


	Y.namespace('Zen');

	Y.Zen.SlideSource = SlideSource;
}, '0.0.1', {
	requires: ['get', 'querystring-parse']
});