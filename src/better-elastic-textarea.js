(function(DOM) {
    "use strict";

    // Insiped by article at a list apart:
    // http://alistapart.com/article/expanding-text-areas-made-elegant

    DOM.extend("textarea[rows='1']", {
        constructor() {
            const wrapper = DOM.create("<div class='better-elastic-textarea'><pre><span></span></pre></div>");
            const holder = wrapper.find("span");

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
        _inputTextarea(holder, propName) {
            // use textarea value in regular input event case
            var value = propName ? this.get(propName) : this.value();
            // use &nbsp; to fix issue with adding a new line
            if (value[value.length - 1] === "\n") value += "&nbsp;";
            // IE doesn't respect newlines so use <br> instead
            holder.set("innerHTML", value.split("\n").join("<br>"));
        }
    });
}(window.DOM));
