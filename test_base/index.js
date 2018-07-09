
//组件 Vue.component
Vue.component('todo-item',{
    template: '<li>{{todo.text}}<li>',
    props: ['todo']
});


var app = new Vue ({
    el: '#app',
    data: {
        message: "Hello World!"
    }
});

var app2 = new Vue ({
    el: '#app2',
    data: {
        message: '页面加载于' + new Date().toLocaleString(),
        loadtime: new Date().toLocaleString()
    }
});


var app4 = new Vue ({
    el: '#app4',
    data: {
        todos: [
            {id:0,text:"aaaaaaaaa"},
            {id:1,text:"bbbbbbbbbb"},
            {id:2,text:"ccccccccccc"},
            {id:3,text:"xxxxx"}
        ],
    }
});

var app5 = new Vue ({
    el: '#app5',
    data: {
        message: "Hello Kingsoft !"
    },
    methods: {
        reverseMessage: function () {
            app6.message = this.message.split('').reverse().join('');
        }
    }
});

var app7 = new Vue({
    el: '#app7',
    data: {
        todos: [
            {id:0,text:"aaaaaaaaa"},
            {id:1,text:"bbbbbbbbbb"},
            {id:2,text:"ccccccccccc"},
            {id:3,text:"xxxxx"}
        ],
    }
});



var app6 = new Vue ({
    el: '#app6',
    data: {
        message: '',
    },
});