/*!
 * better-elastic-textarea (https://github.com/chemerisuk/better-dom)
 * elastic textarea for [better-dom](https://github.com/chemerisuk/better-dom)
 *
 * Copyright (c) 2013 Maksim Chemerisuk
 */
DOM.extend("textarea.elastic", {
    wrapper: "div[style=position:relative]>pre[style=visibility:hidden;margin:0;border-style:solid]>span[style=display:inline-block;white-space:pre-wrap]"
}, {
    constructor: function(tpl) {
        var wrapper = tpl.wrapper,
            holder = wrapper.child(0),
            span = holder.child(0);

        holder.setStyle({
            font: this.getStyle("font"),
            padding: this.getStyle("padding"),
            "border-width": this.getStyle("border-width")
        });

        this.on("input", this._syncWithHolder, [span]);
        this._syncWithHolder(span);

        this.parent("form").on("reset", this._syncWithHolder, [span, true], this);

        wrapper.append(this.after(wrapper));
    },
    _syncWithHolder: function(span, defaultValue) {
        value = this.get(defaultValue ? "defaultValue" : "value");

        // use &nbsp; to fix issue with adding a new line
        if (value[value.length - 1] === "\n") value += "&nbsp;";
        
        // IE doesn't respect newlines so use <br> instead
        span.set(value.split("\n").join("<br>"));
    }
});

DOM.importStyles("textarea.elastic", {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    resize: "none",
    "box-sizing": "border-box"
});
