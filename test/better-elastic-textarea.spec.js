describe("better-elastic-textarea", function() {
    "use strict";

    var textarea, holder;

    beforeEach(function() {
        textarea = DOM.mock("<textarea rows='1'></textarea>");
        holder = DOM.mock("<div>");
    });

    it("should update holder value on input", function() {
        var spy = spyOn(textarea, "value").and.returnValue("321"),
            holderSpy = spyOn(holder, "set");

        textarea._inputTextarea(holder);
        expect(spy).toHaveBeenCalled();
        expect(holderSpy).toHaveBeenCalledWith("innerHTML", "321");
    });

    it("should restore defaultValue on form reset", function() {
        var spy = spyOn(textarea, "get").and.returnValue("123"),
            holderSpy = spyOn(holder, "set");

        textarea._inputTextarea(holder, "defaultValue");
        expect(spy).toHaveBeenCalledWith("defaultValue");
        expect(holderSpy).toHaveBeenCalledWith("innerHTML", "123");
    });

});
