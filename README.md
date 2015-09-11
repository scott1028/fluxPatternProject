# Tiny Flux Project Sample For Study

#### Conception

- 帶資料的 Event 單方向流動.
- one Store to one View, and all pass by Event Callback( by pass CustomEvent with data ).
- Data Update logic in Store and expose global fetch Data method for Controll-view(or View).

~~~
$ npm install -gd http-server
~~~

~~~
$ http-server
~~~

- ref: http://l7960261.blogspot.tw/2015/03/flux-javascript.html
- ref: http://www.thecssninja.com/javascript/handleevent	(by obj.handlerEvent method)
- ref: https://developer.mozilla.org/zh-TW/docs/Web/API/EventTarget/addEventListener
- ref: https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent

~~~
利用 addEventListener 的 pass object 方始來測定物件 callback, 達成 store, etc Event Callback 封裝！
~~~

#### Flux Base on what?

### HTML5 API

- CustomEvent
- addEventListener with obj(not dom)
- dispatchEvent by your CustomEvent

### Sample

~~~
var Store = function(){};
Store.prototype = {
    init: function(){
        this.data = [123];
    },
    handleEvent: function(e){
        console.log(e);
        console.log(this.data);
    }
}

var store = new Store();
store.init();

addEventListener('myEvent', store);

	...


var OnClick = function(e){
    dispatchEvent(new CustomEvent('myEvent', {
        detail: 'bring by CustomEvent#1',
    }));
};
~~~
