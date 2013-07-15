YUI.add('zen-app', function (Y) {
	'use strict';

	var Zen;

	Y.namespace('Zen');

	Zen = Y.Zen;
	// TODO: bullet slides
	// TODO: view that shows progress through slideshow

	Y.Zen.App = Y.Base.create('zen', Y.App, [], {
		serverRouting: false,

		transitions: false,

		render: function () {
			var slides = this.get('slides'),
				model,
				presentation,
				count;

			model = new Zen.PresentationModel({
				items: slides
			});

			presentation = new Zen.PresentationView({
				container: this.get('container'),
				modelList: model
			});

			count = new Zen.CountView({
				model: model
			});

			presentation.render();
			presentation.start();
			count.render();
		}
	});

	return Y.Zen.App;
}, '0.0.1', {
	requires: [
		'base',
		'app-base',
		'zen-notes-view',
		'zen-presentation-model',
		'zen-presentation-view',
		'zen-count-view'
	]
});
