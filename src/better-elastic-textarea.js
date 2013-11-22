(function(DOM) {
    "use strict";

    var SPACE_HOLDER_KEY = "space-holder";

    DOM.extend("textarea[rows='1']", {
        constructor: function() {
            var wrapper = DOM.create("div.better-elastic-textarea>pre[style=\"font:${font};padding:${pad};border-width:${bw}\"]>span", {
                font: this.style("font"),
                pad: this.style("padding"),
                bw: this.style("border-width")
            });

            this
                .data(SPACE_HOLDER_KEY, wrapper.find("span"))
                .on("input", "handleInput");

            this.parent("form").on("reset", this, "handleFormReset");

            wrapper.append(this.after(wrapper).set("rows", null));
        },
        handleInput: function(value) {
            // use a small trick here: type of the first
            // argument is string only when we send defaultValue
            if (typeof value !== "string") value = this.get();

            // use &nbsp; to fix issue with adding a new line
            if (value[value.length - 1] === "\n") value += "&nbsp;";

            // IE doesn't respect newlines so use <br> instead
            this.data(SPACE_HOLDER_KEY).set(value.split("\n").join("<br>"));
        },
        handleFormReset: function() {
            this.fire("input", this.get("defaultValue"));
        }
    });
}(window.DOM));
