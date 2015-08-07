/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, brackets */

/*
 * Brackets ECT template syntax highlighter.
 * © 2015, Viktor Yakubiv, Steve McArthur MIT License
 * https://github.com/viktor-yakubiv/brackets-ect
 */
define(function (require, exports, module) {
    "use strict";

    require('./coffeescript2');

    var codemirror = brackets.getModule("thirdparty/CodeMirror2/lib/codemirror");
    codemirror.defineMIME("application/x-ect", {name: "htmlembedded", scriptingModeSpec:"coffeescript2"});
    var LanguageManager = brackets.getModule("language/LanguageManager");

    LanguageManager.defineLanguage("ect", {
        name: "ECT",
        mode: ["htmlembedded", "application/x-ect"],
        fileExtensions: ["eco","html.eco", "ect","html.ect"]
    });

});
