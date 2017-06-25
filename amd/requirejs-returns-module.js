define('my/shirt', function () {
   /** 
    * A module representing a shirt.
    * @exports my/shirt
    */
    var shirt = {
    
        /** A property of the module. */
        color: "black",
        
        /** @constructor */
        Turtleneck: function(size) {
            /** A property of the class. */
            this.size = size;
        }
    };

    return shirt;
});