
var app = new Vue ({
    el: '#app',
    data: {
        message: '页面刷新时间：',
        time: new Date().toLocaleString(),
        isRed: false,
        isBlue: true,
        fontsize: 1
    },
    methods: {
        changeClass: function () {
            this.isBlue = !this.isBlue;
            this.isRed = !this.isRed;
            this.fontsize += 1;
            return ;
        },
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
