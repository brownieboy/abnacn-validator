#abnacn-validator

Validates Australian Business Numbers (ABNs) or Australian Company Numbers (ACNs) or a combination of both.

##Installation
Install from npm, like so:

    npm install abnacn-validator --save



##Usage
The modules exposes three different functions: isValidABN, isValidACN and isValidABNorACN.  The latter will return true if the number is either a valid ABN or a valid ACN.


###Importing in ES6 syntax:

    // Just import the functions you need.  There's no default export.
    import {isValidABN, isValidACN, isValidABNorACN} from "abnacn-validator";


    isValidABN("53 004 085 616"); // -> true
    isValidABN("0"); // -> false
    isValidACN("005 749 986"); // -> true
    isValidACN("53 004 085 616"); // -> false  (that's an ABN!)
    isValidABNorACN("53 004 085 616"); // -> true
    isValidABNorACN("005 749 986"); // -> true
    isValidABNorACN("0"); // -> false



###Requiring in CommonJS (Node) syntax:

    var abnAcnValidatorObj = require("abnacn-validator");
    
    abnAcnValidatorObj.isValidABN("53 004 085 616"); // -> true
    abnAcnValidatorObj.isValidABN("0"); // -> false
    abnAcnValidatorObj.isValidACN("005 749 986"); // -> true
    abnAcnValidatorObj.isValidACN("53 004 085 616"); // -> false  (that's an ABN!)
    abnAcnValidatorObj.isValidABNorACN("53 004 085 616"); // -> true
    abnAcnValidatorObj.isValidABNorACN("005 749 986"); // -> true
    abnAcnValidatorObj.isValidABNorACN("0"); // -> false



###AMD/RequireJS Syntax
For the masochists among you...  ;-)

I built this as a UMD module, using Babel's babel-plugin-transform-es2015-modules-umd plugin. So in theory, it should work with the AMD/RequireJS syntax too.  But this is untested, so suck it and see.


###Script tag
And finally, the humble script tag:

    <script src="abnacn-validator.js"></script>


##Development
Edit source file in the /src folder, then run:

    npm run build

to build it to the dist folder.  Babel will transform from ES6 to CommonJS format, and will also export in UMD format, courtesy of its [babel-plugin-transform-es2015-modules-umd plugin](https://babeljs.io/docs/plugins/transform-es2015-modules-umd/).

To run the test suite.

    npm test


##Acknowlegements
ABN validation code taken from [SomeoneWeird's abn-validator module](https://github.com/SomeoneWeird/abn-validator).  I lifted and adapted some of his tests too.  In fact, if all you want is ABN validation, you may as well install that module (`npm install abn-validator`) rather than this one.

ACN validation code taken from Worldspawn's post on [this Whirlpool forum thread](http://forums.whirlpool.net.au/archive/984775).
