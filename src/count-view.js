YUI.add('zen-count-view', function (Y) {
	'use strict';

	var template = new Y.Template(),
		templateText = '<%= this.slide %> / <%= this.total %>';

	Y.namespace('Zen.CountView');

	Y.Zen.CountView = Y.Base.create('countView', Y.View, [], {
		initializer: function () {
			var body = Y.one('body'),
				model = this.get('model');

			this.node = body.appendChild('<div class="zen-count"></div>');

			this.render();

			model.after('currentSlideChange', this.render, this);
		},

		render: function () {
			var model = this.get('model'),
				currentSlide = model.get('currentSlide') + 1,
				data,
				html;

			data = {
				slide: currentSlide,
				total: model.size()
			};

			html = template.render(templateText, data);

			this.node.setHTML(html);

			return this;
		}
	});
}, '0.0.1', {
	requires: [
		'view',
		'template',
		'node-base',
		'node-core'
	]
});