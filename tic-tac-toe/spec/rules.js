describe("Rules", function(){
    describe("to check if a string is empty", function(){
        it("to have a non-empty string return false", function(){
            expect(isEmpty("non-empty")).toEqual(false);
        });
        it("to have an empty string return true", function(){
            expect(isEmpty("")).toEqual(true);
        });
        it("to have an undefined string return true", function(){
            expect(isEmpty(undefined)).toEqual(true);
        });
    })
})