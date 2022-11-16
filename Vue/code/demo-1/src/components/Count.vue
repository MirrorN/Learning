<template>
    <div>
        <p>{{ ind }}</p>
        <input type="text" v-model="ind">
        <button @click="add">add</button>
        <button @click="sub">sub</button>
    </div>
</template>


<script>
export default {
    props: {
        initNum: {
            default: 0,
        },
    },
    data() {
        return {
            ind: this.initNum
        }
    },
    methods: {
        add() {
            this.ind += 1
        },
        sub() {
            this.ind -= 1
        },
    },
    watch: {
        ind(newVal, oldVal) {
            console.log(oldVal + '--->' + newVal)
        }
    }
}
</script>

<style lang="less" scoped>
p {
    color: aquamarine,
}

.test {
    height: 100px;
    width: 100px;
    background-color: aqua;
}
</style>