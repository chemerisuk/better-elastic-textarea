describe("better-elastic-textarea", function() {
    "use strict";

    var textarea, holder;

    beforeEach(function() {
        textarea = DOM.mock("textarea[rows='1']");
        holder = textarea.data("space-holder");
    });

    it("should update holder value on input", function() {
        var spy = spyOn(textarea, "get").andReturn("321");

        textarea.onInput();
        expect(spy).toHaveBeenCalled();
        expect(holder.get()).toBe("321");
    });

    it("should restore defaultValue on form reset", function() {
        var spy = spyOn(textarea, "get").andReturn("123");

        textarea.onFormReset();
        expect(spy).toHaveBeenCalledWith("defaultValue");
        expect(holder.get()).toBe("123");
    });

});
