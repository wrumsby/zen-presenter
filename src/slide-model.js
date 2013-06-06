/*global YUI */
YUI.add('zen-slide-model', function (Y) {
	'use strict';

	Y.namespace('Zen.SlideModel');

	Y.Zen.SlideModel = Y.Base.create('slideModel', Y.Model, [], {}, {
		ATTRS: {
			caption: {
				validator: Y.Lang.isString
			},

			previous: {
				validator: Y.Lang.isBoolean,
				value: false
			},

			current: {
				validator: Y.Lang.isBoolean,
				value: false
			},

			next: {
				validator: Y.Lang.isBoolean,
				value: false
			}			
		}
	});
}, '0.0.1', {
	requires: ['model']
});