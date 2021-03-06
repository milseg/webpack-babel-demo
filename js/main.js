/* https://leanpub.com/setting-up-es6/read#sec_webpack-babel */
import 'babel-polyfill';
import world from './world';
import * as lc from './var_vs_let.js';
import * as ts from './template_strings.js';
import * as des from './destructuring.js';
import * as on from './object_notation.js';
import * as sa from './standard_arguments.js';
import * as sr from './spread_rest.js';
import * as af from './arrow_functions.js';

document.getElementById('output').innerHTML = `Hello ${world}!`;

//Uncomment either of these lines and check the results or test any other functions defined on the imported modules
//ts.es5VSes6();
//des.destructuringChangingParams();
//on.newSyntax();
//on.protoStandandardized();
//on.superKeyword();
//sa.standardParameterSimple();
//sa.standardParameterExpression();
//sr.spreadPms();
//sr.pmsRest();
//af.oneStatemenAndPm();
//af.multipleStatementAndPm();
//af.emptyPmsArrowFunction();
//af.thisScope();
//af.thisScope();
//af.arrowFunctionThisScope();
//af.bindDoesntWork();
