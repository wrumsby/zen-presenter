/*global Math */
YUI.add('zen-presentation-model', function (Y) {
	'use strict';

	Y.namespace('Zen.PresentationModel');

	Y.Zen.PresentationModel = Y.Base.create('presentationModel', Y.ModelList, [], {
		model: Y.Zen.SlideModel,

		next: function () {
			var currentSlide = this.get('currentSlide');

			this.set('currentSlide', currentSlide + 1);
		},

		previous: function () {
			var currentSlide = this.get('currentSlide');

			this.set('currentSlide', currentSlide - 1);
		},

		start: function () {
			this.set('currentSlide', 0);
		},

		end: function () {
			this.set('currentSlide', Math.max(0, this.size() - 1));
		}
	}, {
		ATTRS: {
			currentSlide: {
				validator: function (val) {
					var value;

					if (Y.Lang.isNumber(val)) {
						value = +val;

						return (value >= 0) && (value < this.size());
					}

					return false;
				},
				value: 0
			}
		}
	});
}, '0.0.1', {
	requires: ['model-list', 'zen-slide-model']
});
