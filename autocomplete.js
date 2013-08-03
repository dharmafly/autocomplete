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
				found = [];

			str = this.trim(str).toLowerCase();

			for (; i<length; i++){
				if (lowercaseTerms[i].indexOf(str) === 0){
					patternFound = true;

					// Push original term
					found.push(this.terms[i]);
				}
				// If pattern has been found and is no longer found
				// then exit the loop
				else if (patternFound){
					break;
				}
			}
			return found;
		}
	};
	
	return Autocomplete;
}());