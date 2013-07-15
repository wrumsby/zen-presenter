YUI.applyConfig({"groups":{"zen":{"combine":false,"base":"./","comboBase":"./","modules":{"zen-app":{"requires":["base","app-base","zen-notes-view","zen-presentation-model","zen-presentation-view","zen-count-view"],"path":"src/app.js"},"zen-count-view":{"requires":["view","template","node-base","node-core"],"path":"src/count-view.js"},"zen-flickr":{"requires":["jsonp","jsonp-url"],"path":"src/flickr.js"},"zen-github":{"requires":["jsonp","jsonp-url","gallery-storage-lite"],"path":"src/github.js"},"zen-notes-model":{"requires":["model"],"path":"src/notes-model.js"},"zen-notes-view":{"requires":["view","node-base","node-core","handlebars","zen-notes-model","event-key"],"path":"src/notes-view.js"},"zen-presentation-model":{"requires":["model-list","zen-slide-model"],"path":"src/presentation-model.js"},"zen-presentation-view":{"requires":["view","node-base","node-core","node-style","node-screen","event-key","get","zen-slide-view","zen-flickr"],"path":"src/presentation-view.js"},"zen-slide-model":{"requires":["model"],"path":"src/slide-model.js"},"zen-slide-source":{"requires":["get","querystring-parse"],"path":"src/slide-source.js"},"zen-slide-view":{"requires":["view","node-base","node-core","node-style","zen-flickr","zen-github","escape","handlebars"],"path":"src/slide-view.js"},"zen-twitter":{"requires":["get"],"path":"src/twitter.js"}}},"test":{"combine":false,"base":"./","comboBase":"./","modules":{"test-zen-flickr":{"requires":["test","zen-flickr"],"path":"test/flickr.js"}}}}});