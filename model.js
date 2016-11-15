function Model(limit) {
    this.data = {};
    this.limit = limit;

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

    //check limit
    this.check = function () {
        var sum = 0;
        for(var k in this.data) {
            sum += this.data[k];
        }
        return sum <= this.limit;
    };

    this.setLimit = function(limit) {
        this.limit = limit;
    };

    this.getLimit = function() {
        return this.limit;
    };

    //return data
    this.getElementsMap = function() {
        return this.data;
    }
}