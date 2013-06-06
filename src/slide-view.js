YUI.add('zen-slide-view', function (Y) {
	'use strict';

	var node = Y.one('#slide-template').getHTML(),
		template = Y.Handlebars.compile(node);

	Y.Handlebars.registerHelper('noprotocol', function (url) {
		return url.substring(url.indexOf('https://') === 0 ? 8 : 7);
	});

	Y.namespace('Zen.SlideView');

	Y.Zen.SlideView = Y.Base.create('slideView', Y.View, [], {
		node: null,

		initializer: function () {
			var model = this.get('model');

			// TODO: scope might be wrong here
			model.after('change', this._afterRender, this);
		},

		// TODO: this is all fairly gross :(
		render: function () {
			var me = this,
				container = this.get('container'),
				model = this.get('model'),
				html = template(model.toJSON()),
				bgImage,
				gist,
				children,
				n;

			// Render this view's HTML into the container element.
			container.append(html);

			children = container.get('children');
			n = children.size();

			this.node = children.item(n - 1);

			bgImage = model.get('image');
			gist = model.get('gist');

			if (bgImage) {
				// TODO: Flickr API should return styles - basically URL -> style mapping
				Y.Zen.Flickr.getPhoto(bgImage, function (source, options) {
					var node = options.node,
						left = options.left;

					node.setStyles({
						'background-image': 'url(' + source + ')',
						'background-position-x': left + 'px',
						'background-size': options.size
					});
				}, this.node);
			}

			if (gist) {
				Y.Zen.Github.getGist(gist, function (config) {
					me.node.append('<pre>' + Y.Escape.html(config.content) + '</pre>');

					YUI().use('codemirror', 'codemirror-' + config.mode, function (Y) {
						Y.CodeMirror(me.node.getDOMNode(), {
							value: config.content,
							mode: config.mode,
							readOnly: true
						});

						me.node.one('pre').setStyle('display', 'none');
					});
				});
			}

			if (model.get('tag')) {
				var flag = true;

				this.node.on('mouseover', function (e) {
					e.preventDefault();

					if (flag) {
						flag = false;
						me.node.setHTML('');

						Y.Zen.Flickr.getPhotoByTag(model.get('tag'), function (source, options) {
							var node = options.node,
								left = options.left;

							Y.Zen.Flickr.getOwner(options.photoId, function (owner) {
								node.setHTML('<div class="title">' + (owner.realname || owner.username) + '</div>');
							});

							node.setStyles({
								'background-image': 'url(' + source + ')',
								'background-position-x': left + 'px',
								'background-size': options.size
							});
						}, me.node);
					}
				});
			}

			this._afterRender();

			return this;
		},

		_afterRender: function () {
			var model = this.get('model'),
				node = this.node;

			node.removeClass('previous');
			node.removeClass('current');
			node.removeClass('next');

			if (model.get('previous')) {
				node.addClass('previous');
			}

			if (model.get('current')) {
				node.addClass('current');
			}

			if (model.get('next')) {
				node.addClass('next');
			}
		}
	}, {});
}, '0.0.1', {
	requires: [
		'view',
		'node-base',
		'node-core',
		'node-style',
		'zen-flickr',
		'zen-github',
		'escape',
		'handlebars'
	]
});
