// https://api.twitter.com/1/statuses/oembed.json?url=https://twitter.com/keranm/status/315670961594699777
YUI.add('zen-twitter', function (Y) {
	'use strict';

	//https://api.twitter.com/1.1/statuses/oembed.json <-- requires oauth
	//could implement a generic oembed thingo
	var endpoint = 'https://api.twitter.com/1/statuses/oembed.json?url=';

	Y.namespace('Zen.Twitter');


	Y.Zen.Twitter = {
		getTweet: function (url) {

		}
	};
}, '0.0.1', {
	requires: ['get']
});