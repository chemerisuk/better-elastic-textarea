describe("better-elastic-textarea", function() {
    "use strict";

    var textarea, holder;

    beforeEach(function() {
        textarea = DOM.mock("textarea[rows='1']");
        holder = DOM.mock();
    });

    it("should update holder value on input", function() {
        var spy = spyOn(textarea, "get").andReturn("321"),
            holderSpy = spyOn(holder, "set");

        textarea.onInput(holder);
        expect(spy).toHaveBeenCalled();
        expect(holderSpy).toHaveBeenCalledWith("321");
    });

    it("should restore defaultValue on form reset", function() {
        var spy = spyOn(textarea, "get").andReturn("123"),
            inputSpy = jasmine.createSpy("oninput");

        inputSpy.andCallFake(function(value) {
            expect(value).toBe("123");
        });

        textarea.on("input", inputSpy).onFormReset();
        expect(spy).toHaveBeenCalledWith("defaultValue");
        expect(inputSpy).toHaveBeenCalled();
    });

});
