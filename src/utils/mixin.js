let myMixin = {
    data() {
        return {
            message: 'hello',
            foo: 'abc'
        }
    },
    created() {
        console.log('mixin定义')
        this.hello()
    },
    methods: {
        hello: function () {
            console.log('hello from mixin!')
        }
    },
}
export default myMixin;
