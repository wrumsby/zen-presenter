YUI.add('zen-notes-view', function (Y) {
	'use strict';

    var KEY = {
        LEFT_ARROW: 37,
        RIGHT_ARROW: 39
    };

	var body = Y.one('body');

	Y.namespace('Zen.NotesView');

	Y.Zen.NotesView = Y.Base.create('notesView', Y.View, [], {
		node: null,

		initializer: function () {
			var model = this.get('modelList');

			this.set('node', Y.one('#notes'));

			// TODO: scope might be wrong here
			model.after('currentSlideChange', this.render, this);

			body.on('key', this.previousSlide, 'down:' + KEY.LEFT_ARROW, this);
			body.on('key', this.nextSlide, 'down:' + KEY.RIGHT_ARROW, this);

		},

		// TODO: this is all fairly gross :(
		render: function () {
			var node = this.get('node'),
				model = this.get('modelList'),
				templateNode = Y.one('#notes-template').getHTML(),
				template = Y.Handlebars.compile(templateNode),
				index = model.get('currentSlide'),
				html = template(model.item(index).toJSON());

			node.setHTML(html);
		},

		previousSlide: function () {
			this.get('modelList').previous();
		},

		nextSlide: function () {
			this.get('modelList').next();
		}
	});
}, '0.0.1', {
	requires: [
		'view',
		'node-base',
		'node-core',
		'handlebars',
		'zen-notes-model',
		'event-key'
	]
});
