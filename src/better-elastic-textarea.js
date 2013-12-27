(function(DOM) {
    "use strict";

    // Insiped by article at a list apart:
    // http://alistapart.com/article/expanding-text-areas-made-elegant

    DOM.extend("textarea[rows='1']", {
        constructor: function() {
            var wrapper = DOM.create("div.better-elastic-textarea>pre>span");

            this.on("input", this.onInput.bind(this, wrapper.find("span")));

            this.parent("form").on("reset", this.onFormReset.bind(this));

            wrapper.child(0).style({
                font: this.style("font"),
                margin: this.style("margin"),
                padding: this.style("padding"),
                "border-width": this.style("border-width")
            });

            wrapper.append(this.after(wrapper));
        },
        onInput: function(holder, value) {
            // use textarea value in regular input event case
            if (arguments.length < 4) value = this.get();

            // use &nbsp; to fix issue with adding a new line
            if (value[value.length - 1] === "\n") value += "&nbsp;";

            // IE doesn't respect newlines so use <br> instead
            holder.set(value.split("\n").join("<br>"));
        },
        onFormReset: function() {
            this.fire("input", this.get("defaultValue"));
        }
    });
}(window.DOM));
