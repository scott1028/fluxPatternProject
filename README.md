# Tiny Flux Project Sample For Study

#### Conception

- 帶資料的 Event 單方向流動.
- one Store to one View, and all pass by Event Callback( by pass CustomEvent with data ).
- Data Update logic in Store and expose global fetch Data method for Controll-view(or View).
- When app start regist View-Store in Dispatch -> User Create Action Event From View -> Store capture Event, when finished emit event to Control-View -> Control-View, capture Event, invoke Store global method fetch data, and render to View.


![Alt text](https://raw.githubusercontent.com/scott1028/fluxPatternProject/master/diagram.png "Flow View")

~~~
1. Action: CustomEvent Instance. (可透過 JavaScript new CustomEvent 產生)
2. View: ViewControler Instance. (實作, 似乎可以風裝在 Dispatch 的 Init Method Scope 層, 負責接收 Store 事件 & 更新畫面)
3. Store: DataStore Instance. (實作, 似乎可以封裝在 Dispatch 的 Init Method Scope 層 & 負責接收 Action 事件 & 發送更新事件給 View 告知 Store 已被更新 & 提供 Global Method 提取當前資料)
4. Dispatch: EventDispatcher Instance. (實作 & 負責註冊元件 & 調配分發配置)
~~~

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

#### Basic

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

#### Advance


![Alt text](https://raw.githubusercontent.com/scott1028/fluxPatternProject/master/advance01.html.gif "advance01.html")

~~~
// My first component.
var cmpType01 = {
    dispatch: function(node, initData){
        // define store
        this.store = function(data, suffix){
            addEventListener('updateStore' + suffix, this);


            //
            this.data = data || '';
            this.getData = function(){
                return this.data;
            };
            this.handleEvent = function(e){
                switch(e.type){
                    case 'updateStore' + suffix:
                        this.data = e.detail.value;
                        dispatchEvent(new CustomEvent('storeUpdated' + suffix));
                        break;
                    default:
                        console.log(e.type);
                }
            };
        };
        // define viewCtrl
        this.viewCtrl = function(self, view, suffix){
            addEventListener('storeUpdated' + suffix, this);


            //
            this.handleEvent = function(e){
                switch(e.type){
                    case 'storeUpdated' + suffix:
                        view.querySelector('[grid]').textContent = self._store.getData();
                        break;
                    default:
                        console.log(e.type);
                }
            }
        };

        // define dispatch & init & this UI user-action-callback
        var suffix = '_' + (new Date).getTime();  // 避免相同元件互相影響
        node.querySelector('input[inquire]').addEventListener('input', function(e){
            // use window.dispatchEvent to broadcast Event to All DOM of this Viewport.
            dispatchEvent(new CustomEvent('updateStore' + suffix, {
                detail: {value: e.target.value}
            }));
        });


        //
        this._viewCtrl = new this.viewCtrl(this, node, suffix);
        this._store = new this.store(initData, suffix);

        // init pass data
        dispatchEvent(new CustomEvent('updateStore' + suffix, {
            detail: {value: initData}
        }));
        node.querySelector('input[inquire]').value = initData || '';
    },
};

//
var hookDom01 = document.getElementById('cmp01');
var cmp01 = new cmpType01.dispatch(hookDom01);

var hookDom02 = document.getElementById('cmp02');
var cmp02 = new cmpType01.dispatch(hookDom02, 'test01');
~~~

~~~
<div id="cmp01">
    <input inquire />
    <div grid style="background-color: #333; flex: 1; text-align: center; color: lightblue;">
        <!-- Display Todo Data Here -->
    </div>
</div>

<div id="cmp02">
    <input inquire />
    <div grid style="background-color: #333; flex: 1; text-align: center; color: lightblue;">
        <!-- Display Todo Data Here -->
    </div>
</div>
~~~
