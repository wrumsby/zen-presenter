/*global YUI */
YUI.add('zen-notes-model', function (Y) {
	'use strict';

	Y.namespace('Zen.NotesModel');

	Y.Zen.NotesModel = Y.Base.create('notesModel', Y.Model, [], {}, {
		ATTRS: {
			notes: {
				validator: Y.Lang.isString
			}
		}
	});
}, '0.0.1', {
	requires: ['model']
});