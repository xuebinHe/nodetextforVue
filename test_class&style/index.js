
var app = new Vue ({
    el: '#app',
    data: {
        message: '页面刷新时间：',
        time: new Date().toLocaleString(),
        isRed: false,
        isBlue: true,
        fontsize: 1,
        textColor: ''
    },
    methods: {
        changeClass: function () {
            this.isBlue = !this.isBlue;
            this.isRed = !this.isRed;
            return ;
        },
        biggerFont:function () {
            this.fontsize += 0.1;
            return ;
        },
        changeColor: function () {
            this.textColor = 'rgba('+ 255*Math.random() +',' + 255*Math.random() +','+ 255*Math.random() +','+ Math.random() +')'
            return ;
        }
    },
    computed: {
        comStyle: function () {
            return {
                redtext: this.isRed,
                bluetext: this.isBlue
            }
        }
    },
});
