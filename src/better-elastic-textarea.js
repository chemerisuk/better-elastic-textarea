/*!
 * better-elastic-textarea (https://github.com/chemerisuk/better-dom)
 * elastic textarea for [better-dom](https://github.com/chemerisuk/better-dom)
 *
 * Copyright (c) 2013 Maksim Chemerisuk
 */
DOM.extend("textarea.elastic", {
    after: "div[style=position:relative]>pre[style=visibility:hidden;margin:0;border-style:solid]>span[style=display:inline-block;white-space:pre-wrap]"
}, {
    constructor: function() {
        var textarea = this,
            wrapper = textarea.next(),
            holder = wrapper.child(0),
            span = holder.child(0);

        wrapper.append(textarea);

        holder.setStyle({
            font: textarea.getStyle("font"),
            padding: textarea.getStyle("padding"),
            "border-width": textarea.getStyle("border-width")
        });

        textarea.on("input", textarea._syncWithHolder, [span]);
        textarea._syncWithHolder(span);

        textarea.parent("form").on("reset", textarea._syncWithHolder, [span, true], textarea);
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
