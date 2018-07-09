
//组件 Vue.component
Vue.component('todo-item',{
    template: '<li>{{todo.text}}<li>',
    props: ['todo']
});


var app = new Vue ({
    el: '#app',
    data: {
        message: '页面刷新时间：',
        reverseValue: '',
        oldM: '',
        newM: ''
    },
    // 方法
    methods: {
        getReverse: function () {
            console.log("method");
            this.reverseValue = this.message.split('').reverse().join('');
        },
    },
    // 监听器
    watch: {
        message: function(newMessage, oldMessage) {
            // console.log('newMesssage: ',newMessage);
            // console.log('oldMesssage: ',oldMessage);
            this.oldM= oldMessage;
            this.newM= newMessage;
        }
    },
    // 计算属性
    computed: {
        reverseMessage: function () {
            console.log("computed");
            return this.message.split('').reverse().join('');
        },
    },
    // 生命周期钩子函数，created 创建后出发
    created: function () {
        this.message = this.message + ' ' + new Date().toLocaleString();
        this.getReverse();
    },
    beforeDestroy: function () {
        alert(this.message);
    }
});
