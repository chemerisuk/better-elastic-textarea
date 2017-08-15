/**
 * better-elastic-textarea: Elastic textarea for better-dom
 * @version 1.2.0 Tue, 15 Aug 2017 13:24:30 GMT
 * @link https://github.com/chemerisuk/better-elastic-textarea
 * @copyright 2017 Maksim Chemerisuk
 * @license MIT
 */
(function (DOM) {
    "use strict";

    // Insiped by article at a list apart:
    // http://alistapart.com/article/expanding-text-areas-made-elegant

    DOM.extend("textarea[rows='1']", {
        constructor: function () {
            var wrapper = DOM.create("<div class='better-elastic-textarea'><pre><span></span></pre></div>");
            var holder = wrapper.find("span");

            this.on("input", this._inputTextarea.bind(this, holder));
            this.closest("form").on("reset", this._inputTextarea.bind(this, holder, "defaultValue"));

            wrapper.child(0).css({
                font: this.css("font"),
                margin: this.css("margin"),
                padding: this.css("padding"),
                "border-width": this.css("border-width")
            });

            wrapper.append(this.after(wrapper));
        },
        _inputTextarea: function (holder, propName) {
            // use textarea value in regular input event case
            var value = propName ? this.get(propName) : this.value();
            // use &nbsp; to fix issue with adding a new line
            if (value[value.length - 1] === "\n") value += "&nbsp;";
            // IE doesn't respect newlines so use <br> instead
            holder.set("innerHTML", value.split("\n").join("<br>"));
        }
    });
})(window.DOM);
DOM.importStyles("@media screen", "textarea[rows='1']{display:block;width:100%;resize:none;-webkit-box-sizing:border-box;box-sizing:border-box}.better-elastic-textarea{position:relative}.better-elastic-textarea>textarea{position:absolute;left:0;top:0;height:100%;overflow:hidden;margin:0}.better-elastic-textarea>pre{visibility:hidden;margin:0;border-style:solid}.better-elastic-textarea span{display:inline-block;white-space:pre-wrap}");
