YUI.add('zen-notes-view', function (Y) {
	'use strict';

	Y.namespace('Zen.NotesView');

	Y.Zen.NotesView = Y.Base.create('notesView', Y.View, [], {
		node: null,

		initializer: function () {
			var model = new Y.Zen.NotesModel();

			this.set('model', model);

			// TODO: scope might be wrong here
			model.after('change', this.render, this);

			this.set('node', Y.one('#notes'));
		},

		// TODO: this is all fairly gross :(
		render: function () {
			var node = this.get('node'),
				model = this.get('model'),
				templateNode = Y.one('#notes-template').getHTML(),
				template = Y.Handlebars.compile(templateNode),
				html = template(model.toJSON());

			node.setHTML(html);
		}
	});
}, '0.0.1', {
	requires: [
		'view',
		'node-base',
		'node-core',
		'handlebars',
		'zen-notes-model'
	]
});
