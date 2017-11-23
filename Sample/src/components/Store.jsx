'use strict';


const Store = {
    a: 1,
    add: function(){
        this.a += 1;
        console.log(this.a);
    },
    data: [],
};

export default Store;
