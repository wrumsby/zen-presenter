YUI.add('zen-github', function (Y) {
	'use strict';

	Y.namespace('Zen.Github');

	var URL = 'https://api.github.com/gists/{id}?callback={callback}';

	Y.Zen.Github = {
		getId: function (gistUrl) {
			var split = gistUrl.split('/'),
				id = split[4];

			return id;
		},

		getCached: function (gistUrl) {
			var cached = Y.StorageLite.getItem(gistUrl),
				cachedData;

			if (cached) {
				try {
					cachedData = JSON.parse(cached);

					if (cachedData.content.indexOf('<!DOCTYPE html>') === 0) {
						cachedData.mode = 'htmlmixed';
					} else {
						cachedData.mode = 'javascript';
					}

					return cachedData;
				} catch (e) {
					//ohwell
				}
			}

			return null;
		},

		getGist: function (gistUrl, callback, node) {
			var id = this.getId(gistUrl),
				cached;

			var service = new Y.JSONPRequest(URL, {
				allowCache: true,
				format: function (url, proxy, id) {
					var result = Y.Lang.sub(url, {
						'callback': proxy,
						'id': id
					});

					return result;
				},
				on: {
					success: function (data) {
						var cachedData,
							key,
							extension,
							mode,
							item;

						if (!data.data.files) {
							cachedData = Y.Zen.Github.getCached(gistUrl);

							if (cachedData) {
								callback(cachedData, node);
								return;
							}

							callback({
								content: data.data.message,
								mode: 'text'
							}, node);
						}

						key = Y.Object.keys(data.data.files)[0];
						extension = key.substring(key.lastIndexOf('.') + 1);
						item = data.data.files[key];

						switch (extension) {
							case 'html':
								mode = 'htmlmixed';
								break;
							case 'js':
							case 'json':
								mode = 'javascript';
								break;
							default:
								mode = extension;
						}

						Y.StorageLite.setItem(gistUrl, JSON.stringify({
							content: item.content,
							mode: mode
						}));

						callback({
							content: item.content,
							mode: mode
						}, node);
					}
				}
			});

			cached = this.getCached(gistUrl);

			if (cached) {
				callback(cached, node);
			} else {
				service.send(id);
			}
		}
	};

	return Y.Zen.Github;
}, '0.0.1', {
	requires: [
		'jsonp',
		'jsonp-url',
		'gallery-storage-lite'
	]
});
