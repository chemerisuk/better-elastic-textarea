(function(DOM) {
    "use strict";

    // Insiped by article at a list apart:
    // http://alistapart.com/article/expanding-text-areas-made-elegant

    DOM.extend("textarea[rows='1']", {
        constructor: function() {
            var wrapper = DOM.create("<div class='better-elastic-textarea'><pre><span></span></pre></div>");

            this.on("input", this._inputTextarea.bind(this, wrapper.find("span")));

            this.closest("form").on("reset", this._resetForm.bind(this));

            wrapper.child(0).css({
                font: this.css("font"),
                margin: this.css("margin"),
                padding: this.css("padding"),
                "border-width": this.css("border-width")
            });

            wrapper.append(this.after(wrapper));
        },
        _inputTextarea(holder, value) {
            // use textarea value in regular input event case
            if (arguments.length < 4) value = this.value();
            // use &nbsp; to fix issue with adding a new line
            if (value[value.length - 1] === "\n") value += "&nbsp;";
            // IE doesn't respect newlines so use <br> instead
            holder.set("innerHTML", value.split("\n").join("<br>"));
        },
        _resetForm() {
            this.fire("input", this.get("defaultValue"));
        }
    });
}(window.DOM));
