/**
 * @file src/better-elastic-textarea.js
 * @version 1.1.0 2013-12-03T15:50:44
 * @overview Elastic textarea for better-dom
 * @copyright Maksim Chemerisuk 2013
 * @license MIT
 * @see https://github.com/chemerisuk/better-elastic-textarea
 */
(function(DOM, SPACE_HOLDER_KEY) {
    "use strict";

    // Insiped by article at a list apart:
    // http://alistapart.com/article/expanding-text-areas-made-elegant

    DOM.extend("textarea[rows='1']", {
        constructor: function() {
            var wrapper = DOM.create("div.better-elastic-textarea>pre>span");

            this
                .data(SPACE_HOLDER_KEY, wrapper.find("span"))
                .on("input", this.onInput);

            this.parent("form").on("reset", this, this.onFormReset);

            wrapper.child(0).style({
                font: this.style("font"),
                margin: this.style("margin"),
                padding: this.style("padding"),
                "border-width": this.style("border-width")
            });

            wrapper.append(this.after(wrapper));
        },
        onInput: function(value) {
            // use textarea value in regular input event case
            if (arguments.length < 3) value = this.get();

            // use &nbsp; to fix issue with adding a new line
            if (value[value.length - 1] === "\n") value += "&nbsp;";

            // IE doesn't respect newlines so use <br> instead
            this.data(SPACE_HOLDER_KEY).set(value.split("\n").join("<br>"));
        },
        onFormReset: function() {
            this.fire("input", this.get("defaultValue"));
        }
    });
}(window.DOM, "space-holder"));
