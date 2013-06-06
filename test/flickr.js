YUI.add('test-zen-flickr', function (Y) {
	'use strict';

	var Assert = Y.Assert,
		Runner = Y.Test.Runner;

	var testCase = new Y.Test.Case({
		name: 'Simple Test Case',

		testMethod: function () {
			Assert.isTrue(true);
		}

		// TODO: I want to make assertions about what comes back from the Flickr API
		// w/o calling the Flickr API
		// so basically the munging that happens after the response comes back
		// API should be getPhoto(url, function (styles) { node.setStyles(styles); })
		// on success should transform the result from flickr
		// we should be able to parse
	});

	Runner.add(testCase);
}, '0.0.1', {
	requires: [
		'test',
		'zen-flickr'
	]
});
