var SLIDES = [
	{
		"cls": "first",
		"title": "Hi",
		"notes": "Who am I?"
	},

	{
		"tweet": "https://twitter.com/moonpolysoft/status/316968307712487424"
	},

	{
		"tweet": "https://twitter.com/slicknet/status/319136742861045760"
	},

	{
		"cls": "first",
		"title": "Dispelling the Fear, Uncertainty & Doubt Around Unit Testing JavaScript",
		"lanyrd": "http://lanyrd.com/scfbmq",
		"hashtag": "jstest",
		"notes": "What is this about? This is opinion"
	},

	{
		"image": "http://www.flickr.com/photos/11199896@N00/987572658/",
		"notes": "Why?"
	},

	{
		"quote": {
			"text":	"The secret to building large apps is never build large apps. Break your applications into small pieces. Then, assemble those testable,  bite-sized pieces into your big application",
			"from":	"Justin Meyer, JavaScript MVC"
		},
		"image": "http://www.flickr.com/photos/62472560@N00/4679740934/"
	},

	{
		"tweet": "https://twitter.com/caughtexception/status/319859193270124544"
	},

	{
		"quote": {
			"text": "The Web is the most hostile software engineering environment imaginable",
			"from": "Douglas Crockford"
		},
		"image": "http://www.flickr.com/photos/olibac/2472896028/"
	},

	{
		"quote": {
			"text": "I'm not a great programmer; I'm just a good programmer with great habits.",
			"from": "Kent Beck"
		},
		"image": "http://www.flickr.com/photos/26475170@N02/5971736586/"
	},

	{
		"quote": {
			"text": "Legacy code is code without tests",
			"from": "Michael Feathers"
		},
		"image": "http://www.flickr.com/photos/87793853@N00/526384959/"
	},

	{
		"image": "http://www.flickr.com/photos/35703177@N00/397625597/",
		"notes": "we should be as disciplined on the client side"
	},

	{
		"image": "http://foter.com/f/photo/5741923543/b5fb2b0a82/",
		"title": "Fear, uncertainty & doubt",
		"notes": "fear"
	},

	{
		"image": "http://www.flickr.com/photos/83049159@N00/3670114378/",
		"quote": {
			"text" : "The only way to get good at writing tests is to do it",
			"from": "Merrick Christensen"
		},
		"notes": "see value; start of but how do I start section"
	},

	{
		"list": ["unit", "integration", "system", "acceptance", "regression", "smoke", "load", "performance", "usability", "security"],
		"image": "http://www.flickr.com/photos/61021753@N02/6055587573/"
	},

	{
		"image": "http://www.flickr.com/photos/10687935@N04/3036470963/",
		"title": "It's actually pretty easy"
	},

	{
		"image": "http://www.flickr.com/photos/28442317@N06/2843090613/",
		"title": "You need a test runner"
	},

	{
		"image": "http://www.flickr.com/photos/8344872@N05/4891474513/",
		"title": "and some tests"
	},

	{
		"image": "http://www.flickr.com/photos/31349545@N00/3314506682/",
		"list": ["QUnit", "YUI Test", "Jasmine", "Mocha", "JSUnit"],
		"notes": "All have pros & cons, choose whichever one fits your coding style & workflow unless you are contributing to a library that uses a particular testing library - it doesn't matter"
	},

	{
		"gist": "https://gist.github.com/wrumsby/5230901",
		"notes": "Mocha test runner (#mocha, JamJS, RequireJS); Chai + IE <= 8; WDCNZ"
	},

	{
		"gist": "https://gist.github.com/wrumsby/5230925",
		"notes": "explicit assert; strictEqual"
	},

	{
		"gist": "https://gist.github.com/wrumsby/5282979",
		"notes": "YUI Test test runner ('use strict', YUI().use(), tests, Y.Test.Runner)",
	},

	{
		"gist": "https://gist.github.com/wrumsby/5323675",
		"notes": "YUI Test test case"
	},

	{
		"image": "http://www.flickr.com/photos/28442702@N00/279470263/",
		"title": "Zzzzzzzzzzzzzzzzzzzzz"
	},

	{
		"quote": {
			"text": "Tests need to run fast and they need to be easy to run",
			"from": "Christian Johansen"
		},
		"image": "http://www.flickr.com/photos/75108295@N00/2755292614/"
	},

	{
		"image": "http://www.flickr.com/photos/45339031@N00/212999782/",
		"title": "PhantomJS",
		"notes": "Headless WebKit; vs. JSDOM; monoculture"
	},

	{
		"image": "http://www.flickr.com/photos/94246031@N00/2640502246/",
		"list": ["YUI", "7500+ tests", "~2.5 mins"],
		"link": "https://twitter.com/rioter/status/273972497836281856"
	},

	{
		"image": "http://www.flickr.com/photos/73491156@N00/380316678/",
		"title": "faster > cross browser",
		"notes": "you get so much benefit out of this",
		"opinion": true
	},

	{
		"quote": {
			"text": "Recognise that we make mistakes & catch them quickly",
			"from": "James Shore"
		},
		"image": "http://www.flickr.com/photos/34120957@N04/4199675334/"
	},

	{
		"image": "http://www.flickr.com/photos/8920593@N08/5258580425/",
		"link": "http://yeti.cx/",
		"notes": "we'll look into cross browser in a bit, go to this URL"
	},

	{
		"image": "http://www.flickr.com/photos/44124453791@N01/552152780/",
		"notes": "Tools for testing; tools to support you"
	},

	{
		"image": "http://www.flickr.com/photos/20473443@N07/5480577407/",
		"title": "Node.js-based tooling rocks!",
		"opinion": true,
		"notes": "JS better than mix of other languages; Darren"
	},

	{
		"tweet": "https://twitter.com/Steve_Yegge/status/319648912925417472"
	},

	{
		"tweet": "https://twitter.com/davglass/status/318726404378349569",
		"notes": "Teh snappy!"
	},

	{
		"image": "http://www.flickr.com/photos/18577080@N00/4468567199/",
		"title": "Grunt",
		"notes": "This talk is really about convincing you to use Grunt"
	},

	{
		"tweet": "https://twitter.com/wrumsby/status/321431592063078400"
	},

	{
		"gist": "https://gist.github.com/wrumsby/5325215",
		"notes": "OS X & Windows"
	},

	{
		"gist": "https://gist.github.com/wrumsby/5325194",
		"notes": "package.json"
	},

	{
		"gist": "https://gist.github.com/wrumsby/5230888",
		"notes": "Gruntfile"
	},

	{
		"gist": "https://gist.github.com/wrumsby/5275804",
		"notes": "Gruntfile w/ grunt-shell"
	},

	{
		"image": "http://www.flickr.com/photos/46713723@N04/4290315333/",
		"title": "Why PhantomJS is OK",
		"opinion": true
	},

	{
		"image": "http://www.flickr.com/photos/7762644@N04/2475011402/",
		"opinion": true,
		"notes": "No fan of monoculture, but higher level of abstraction"
	},

	{
		"quote": {
			"text":	"The mantra of jQuery is \"get some elements, do something with them\" - perfectly terrible preparation for analyzing an application from a perspective other than the DOM.",
			"from":	"Rebecca Murphey"
		},
		"image": "http://www.flickr.com/photos/37108241@N00/61056391/",
		"opinion": true,
		"note": "A slight diversion"
	},

	{
		"image": "http://www.flickr.com/photos/37184970@N00/5024754671/in/faves-wrumsby/"
	},

	{
		"list": ["DOM normalisation", "custom events", "attributes"],
		"image": "http://www.flickr.com/photos/wrumsby/5939734634/in/photosof-wrumsby/",
		"title": "How I roll",
		"opinion": true,
		"notes": "Talk about Backbone; Amy"
	},

	{
		"title": "DOM events aren't interesting moments",
		"image": "http://www.flickr.com/photos/38869431@N00/5637429883/",
		"opinion": true,
		"notes": "Talk about touch; <3 custom events (title needs work)"
	},

	{
		"image": "http://www.flickr.com/photos/67499195@N00/4325358745/",
		"title": "Switch CSS classes on/off",
		"notes": "Changing UI by adding/removing CSS classes; CasperJS"
	},

	{
		"image": "http://www.flickr.com/photos/12836528@N00/3143417443/",
		"title": "Next level"
	},

	{
		"gist": "https://gist.github.com/wrumsby/5335759",
		"notes": "Mocha async gist"
	},

	{
		"gist": "https://gist.github.com/wrumsby/5335617",
		"notes": "Sinon.useFakeTimers"
	},

	{
		"gist": "https://gist.github.com/wrumsby/5335628",
		"notes": "Sinon.useFakeXMLHttpRequest"
	},

	{
		"image": "http://www.flickr.com/photos/74105777@N00/6425686111/",
		"notes": "Yeti; Testacular; Test Swarm; JS Test Driver"
	},

	{
		"image": "http://www.flickr.com/photos/89018094@N00/211286121/",
		"link": "http://jshint.com"
	},

	{
		"image": "http://www.flickr.com/photos/44036847@N05/7510298524/",
		"link": "https://github.com/iammerrick/Squire.js"
	},

	{
		"image": "http://www.flickr.com/photos/42788859@N00/461020567/",
		"link": "https://npmjs.org/package/istanbul",
		"notes": "istanbul"
	},

	{
		"link": "https://github.com/Couto/groundskeeper",
		"image": "http://www.flickr.com/photos/8176740@N05/5650367750/",
		"notes": "Groundskeeper"
	},

	{
		"tweet": "https://twitter.com/evangoer/status/310066047824838656",
		"notes": "What to test; don't test the framework"
	},

	{
		"quote": {
			"text": "I get paid for code that works, not for tests, so my philosophy is to test as little as possible to reach a given level of confidence",
			"from": "Kent Beck"
		},
		"image": "http://www.flickr.com/photos/76029035@N02/6829290065/",
		"notes": "confidence, value"
	},

	{
		"image": "http://www.flickr.com/photos/8831683@N05/4560437693/",
		"title": "Work with QA",
		"notes": "Why I don't like Selenium - contracts"
	},

	{
		"image": "http://www.flickr.com/photos/58862846@N00/311110573/",
		"title": "But what if your JavaScript is like this?",
		"notes": "Spagetti"
	},

	{
		"image": "http://www.flickr.com/photos/45358059@N00/2499359567/",
		"link": "http://www.youtube.com/watch?v=J4dlF0kcThQ",
		"notes": "Characterisation tests + refactoring; 17 minutes vs. YUI build"
	},

	{
		"image": "http://www.flickr.com/photos/22607885@N08/4765484383/",
		"notes": "global state is problematic"
	},

	{
		"image": "http://www.flickr.com/photos/51035555243@N01/437960900/",
		"opinion": true,
		"notes": "Backbone or attributes; ES6, new code"
	},

	{
		"tag": "codemania"
	},

	{
		"image": "http://www.flickr.com/photos/49512158@N00/6231468612/",
		"title": "Thank you!",
		"notes": "@davglass, @evangoer, @yaypie, @kiwipom"
	},

	{
		"image": "http://www.flickr.com/photos/wrumsby/8631356260/in/photostream",
		"link": "https://github.com/wrumsby/js-testing-boilerplate",
		"notes": "Boilerplate project"
	},

	{
		"cls": "xero",
		"html": "<span class=\"logo\"></span>",
		"link": "http://xero.com/careers"
	},

	{
		"cls": "javascript",
		"text": "JS",
		"link": "http://meetup.com/AucklandJS/"
	},

	{
		"cls": "wdcnz",
		"text": "WDCNZ",
		"link": "http://wdcnz.com/"
	},

	{
		"credits": true
	},

	{
		"image": "http://www.flickr.com/photos/24046097@N00/3908013145/",
		"cls": "last",
		"twitter": "wrumsby"
	}
];
