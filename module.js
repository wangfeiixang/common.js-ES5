

require.register("01", function(module, exports, require){
    // Module code goes here
    var abc = {
        name:"hello",
        init:function () {
            console.log("abc.js name 是"+this.name);
        }
    };
    
    module.exports = abc;
})