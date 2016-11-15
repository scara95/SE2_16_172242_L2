function Model() {
    this.data = {};
    this.add = function (thing, quantity) {
        if(!(thing in this.data)) {
            this.data[thing] = 0;
        }
        this.data[thing] += quantity;
    };
    this.get = function(thing) {
        return this.data[thing];
    };
}