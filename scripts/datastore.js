(function (window) {
    'use strict';
    var App = window.App || {};

    class DataStore {
        constructor() {
            console.log('running the DataStore constructor.');
            this.data = {};
            //        return undefined;
        }
        add(key, val) { this.data[key] = val; }
        get(key)      { return this.data[key]; }
        getAll()      { return this.data; }
        remove(key)   { delete this.data[key]; }

        static runTests(ds) {
            ds.add('m@bond.com', 'tea');
            ds.add('james@bond.com', 'espresso');
            console.log(ds.getAll());
            ds.remove('james@bond.com');
            console.log('After removing james@bond.com' + ds.getAll());
            console.log(ds.get('m@bond.com'));
            console.log('Trying to get the removed james@bond.com gets... ' 
                        + ds.get('james@bond.com'));    
        }
    }
 
    App.DataStore = DataStore;
    window.App = App;

})(window);
