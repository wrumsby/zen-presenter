/*global Math */
YUI.add('zen-presentation-view', function (Y) {
	'use strict';

    var KEY = {
        LEFT_ARROW: 37,
        RIGHT_ARROW: 39
    };

    var SLIDE_WIDTH = 832;

    var body = Y.one('body');

	Y.namespace('Zen.PresentationView');

	Y.Zen.PresentationView = Y.Base.create('presentationView', Y.View, [], {
		initializer: function () {
			var presentationModel = this.get('modelList'),
				container = this.get('container'),
				containerWidth;

			containerWidth = (SLIDE_WIDTH + 400) * Math.max(1, presentationModel.size()) + 'px';
			container.setStyle('width', containerWidth);

			body.on('key', this.previousSlide, 'down:' + KEY.LEFT_ARROW, this);
			body.on('key', this.nextSlide, 'down:' + KEY.RIGHT_ARROW, this);

			presentationModel.on('currentSlideChange', this.changeSlide, this);

			// resize
			this.on('ready', function () {
				Y.Get.js('http://platform.twitter.com/widgets.js', function () {});
			});
		},

		render: function () {
			var me = this,
				presentationModel = this.get('modelList'),
				container = this.get('container');

			this.credits = [];

			body.append('<div class="zen-count"> 1 / ' + presentationModel.size() + " </div>");

			presentationModel.each(function (slideModel) {
				var slideView,
					photoUrl = slideModel.get('image'),
					photoId;

				slideView = new Y.Zen.SlideView({
					container: container,
					model: slideModel
				});

				slideView.render();

				if (photoUrl) {
					photoId = Y.Zen.Flickr.getId(photoUrl);

					Y.Zen.Flickr.getOwner(photoId, function (owner) {
						me.credits.push(owner.realname || owner.username);
					});
				}
			});

			SLIDE_WIDTH = container.one('.slide').get('offsetWidth');

			// Append the container element to the DOM if it's not on the page already.
			if (!container.inDoc()) {
				Y.one('body').append(container);
			}

			// once only
			this.fire('ready');

			return this;
		},

		start: function () {
			var presentationModel = this.get('modelList');

			presentationModel.set('currentSlide', 0);
		},

		nextSlide: function (e) {
			var presentationModel = this.get('modelList');

			e.preventDefault();
			presentationModel.next();
		},

		previousSlide: function (e) {
			var presentationModel = this.get('modelList');

			e.preventDefault();
			presentationModel.previous();
		},

		changeSlide: function (e) {
			var container = this.get('container'),
				currentSlide = e.newVal,
				slides = container.all('.slide'),
				windowWidth,
				marginLeft;

			windowWidth = body.get('winWidth');

			slides.removeClass('current');

			if (slides.size() > 0) {
				slides.item(currentSlide).addClass('current');

				if (slides.item(currentSlide).hasClass('credits')) {
					slides.item(currentSlide).setHTML('Photo credits: ' + this.credits.join(' / '));
				}

				marginLeft = this._getMarginLeft(windowWidth, slides.item(0).get('offsetWidth'), currentSlide) + 'px';

				container.setStyle('margin-left', marginLeft);
			}
		},

		// TODO: unit test
		_getMarginLeft: function (windowWidth, slideWidth, currentSlide) {
			var result = ((windowWidth - slideWidth) / 2) - (slideWidth * currentSlide);

			return result;
		}
	}, {});
}, '0.0.1', {
	requires: [
		'view',
		'node-base',
		'node-core',
		'node-style',
		'node-screen',
		'event-key',
		'get',
		'zen-slide-view',
		'zen-flickr'
	]
});
