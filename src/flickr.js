YUI.add('zen-flickr', function (Y) {
	'use strict';

	var SLIDE_HEIGHT = 660 + 40,
		SLIDE_WIDTH = (4 / 3) * 660 + 80;

	var GET_SIZES_URL = 'http://api.flickr.com/services/rest/?method=flickr.photos.getSizes&format=json&api_key=0ee890512f764c59181fea709059715d&photo_id={id}&jsoncallback={callback}';

	var GET_INFO_URL = 'http://api.flickr.com/services/rest/?method=flickr.photos.getInfo&format=json&api_key=0ee890512f764c59181fea709059715d&photo_id={id}&jsoncallback={callback}';

	var SEARCH_URL = 'http://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=0ee890512f764c59181fea709059715d&min_taken_date=2013-04-09&privacy_filter=1&safe_search=1&tags={tag}&jsoncallback={callback}';



	function onSuccess (request, data, node, callback) {
		var flag = true,
			result,
			diff;

		Y.Array.each(data.sizes.size, function (item) {
			var width = parseInt(item.width, 10),
				height = parseInt(item.height, 10),
				source = item.source;


			if (flag) {
				result = {
					'source':	source,
					'width':	width,
					'height':	height
				};

				if (width >= SLIDE_WIDTH) {
					flag = false;
				}
			}
		});


		if (result) {
			if (request.id && request.id === "5024754671") {
				result.width = 1.8 * result.width;
				result.height = 1.8 * result.height;
			} else {
				if (result.width < SLIDE_WIDTH) {
					diff = 1 + ((SLIDE_WIDTH - result.width) / result.width);

					result.width = result.width * diff;
					result.height = result.height * diff;
				}

				if (result.height < SLIDE_HEIGHT) {
					diff = 1 + ((SLIDE_HEIGHT - result.height) / result.height);

					result.width = result.width * diff;
					result.height = result.height * diff;
				}
			}

			// TODO: ensure height
			callback(result.source, {
				'photoId': request.id,
				'node': node,
				'left': ((SLIDE_WIDTH - result.width) / 2),
				'size': result.width + 'px ' + result.height + 'px'
			});
		}
	}


	Y.namespace('Zen.Flickr');


	Y.Zen.Flickr = {
		getId: function (url) {
			var split = url.split('/'),
				id = split[5];

			return id;
		},

		getPhotoByTag: function(tag, callback, node) {
			var service = new Y.JSONPRequest(SEARCH_URL, {
				format: function (url, proxy, tag) {
					var result = Y.Lang.sub(url, {
						'callback': proxy,
						'tag': tag
					});

					return result;
				},
				on: {
					success: function (data) {
						var n = data.photos.photo.length,
							i,
							id;

						if (n === 0) {
							return;
						}

						i = Math.floor(Math.random() * n);
						id = data.photos.photo[i].id;

						Y.Zen.Flickr.getPhotoById(id, callback, node);
					}
				}
			});

			service.send(tag);
		},

		getPhoto: function (photoUrl, callback, node) {
			var id = this.getId(photoUrl);

			this.getPhotoById(id, callback, node);
		},

		getPhotoById: function (id, callback, node) {
			var service = new Y.JSONPRequest(GET_SIZES_URL, {
				format: function (url, proxy, id) {
					var result = Y.Lang.sub(url, {
						'callback': proxy,
						'id': id
					});

					return result;
				},
				on: {
					success: function (data) {
						onSuccess({ id: id }, data, node, callback);
					}
				}
			});

			service.send(id);
		},

		getOwner: function (id, callback, node) {
			var service = new Y.JSONPRequest(GET_INFO_URL, {
				format: function (url, proxy, id) {
					var result = Y.Lang.sub(url, {
						'callback': proxy,
						'id': id
					});

					return result;
				},
				on: {
					success: function (data) {
						callback(data.photo.owner);
					}
				}
			});

			service.send(id);
		}
	};

	return Y.Zen.Flickr;
}, '0.0.1', {
	requires: ['jsonp', 'jsonp-url']
});
