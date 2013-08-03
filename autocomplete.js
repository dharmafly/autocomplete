var Autocomplete = (function(){
	'use strict';

	var leftTrim = /^\s\s*/,
		rightTrim = /\s\s*$/;
	
	function Autocomplete(terms){
		this.update(terms);
	}

	Autocomplete.prototype = {
		// http://blog.stevenlevithan.com/archives/faster-trim-javascript
		trim: function(str){
			return str.replace(leftTrim, '').replace(rightTrim, '')
		},

		update: function(terms){
			var i,
				length = terms.length,
				lowercaseTerms = [];

			// Trim whitespace
			for (i=0; i<length; i++){
				terms[i] = this.trim(terms[i]);
			}

			// Sort
			terms = terms.sort();

			// Create lower-case version
			for (i=0; i<length; i++){
				lowercaseTerms[i] = terms[i].toLowerCase();
			}

			// Cache
			this.terms = terms;
			this.lowercaseTerms = lowercaseTerms;

			return this;
		},

		filter: function(str){
			var i = 0,
				lowercaseTerms = this.lowercaseTerms,
				length = lowercaseTerms.length,
				patternFound = false,
				matches = [];

			str = this.trim(str).toLowerCase();

			if (str.length){
				for (; i<length; i++){
					if (lowercaseTerms[i].indexOf(str) === 0){
						patternFound = true;

						// Push original term
						matches.push(this.terms[i]);
					}
					// If pattern has been found and is no longer found
					// then exit the loop
					else if (patternFound){
						break;
					}
				}
			}
			return matches;
		},

		addListener: function(elem, eventName, listener, useCapture){
			if ('addEventListener' in elem){
				elem.addEventListener(eventName, listener, useCapture);
			}
			else if ('attachEvent' in elem){
				elem.attachEvent(eventName, listener);
			}
			return this;
		},

		bindInput: function(inputElem, callback){
			var auto = this;

			function keyListener(event){
				var input = event.target,
					str = input.value,
					matches = auto.filter(str);

				callback(matches);
			}

			return this.addListener(input, 'keyup', keyListener, true);
		},

		bindResults: function(inputElem, resultsElem, limit){
			var openTag  = '<li><a>',
				closeTag = '</a></li>\n';

			limit || (limit = 10);

			function render(matches){
				var length = matches.length,
					i,
					html = '';

				for (i=0; i<length && i<limit; i++){
					html += openTag + matches[i] + closeTag;
				}
				resultsElem.innerHTML = html;
			}

			function chooseTerm(event){
				var target = event.target;

				if (target && (target.nodeName === 'LI' || target.nodeName === 'A')){

					inputElem.value = target.textContent;
					resultsElem.innerHTML = '';
				}
			}
			this.addListener(resultsElem, 'mousedown', chooseTerm, true);

			return this.bindInput(inputElem, render);
		}
	};
	
	return Autocomplete;
}());