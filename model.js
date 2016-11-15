function Model() {
    this.data = {};
    //add quantity to thing, if not present create it
    this.add = function (thing, quantity) {
        //if first insert, initialize the field to 0
        if(!(thing in this.data)) {
            this.data[thing] = 0;
        }
        this.data[thing] += quantity;
    };
    //get the quantity of thing, undefined if not present
    this.get = function(thing) {
        return this.data[thing];
    };
}