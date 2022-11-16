<!-- 测试父子组件之间传值 -->
<template>
    <div>
        <p>son value: {{ count }}</p>
        <button @click="add">add</button>
        <button @click="send">send</button>
    </div>
</template>

<script>
export default {
    props: {
        init: {
            default: 0,
        }
    },
    data() {
        return {
            count: this.init,
        };
    },

    components: {},

    computed: {},

    methods: {
        add() {
            this.count += 1
        },
        send() {
            this.$emit('sendNum', this.count)
        }
    }
}

</script>
<style lang='stylus' scoped>
</style>