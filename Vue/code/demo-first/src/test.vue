<template>
    <!-- root element -->
    <div>
        <p>{{ title }}</p>
        <p>{{ texts }}</p>
        <input type="text" v-model="color">
        <div id="show" :style="{backgroundColor: `rgb(${color})`}"></div>
        <p>{{ res }}</p>
        <button @click="changeText">click</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'get data from interface',
            texts: '',
            color: 'ccc',
        }
    },
    methods: {
        getBookData: async function () {
            const { data: res } = await axios.get(
                'http://www.liulongbin.top:3006/api/getBooks',
                {
                    params: {
                        id: 1,
                    }
                }
            )
        },
        changeText() {
            this.texts = 'change some texts'
        }
    },
    watch: {
        color(newVal, oldVal) {
            console.log(oldVal + '--' + newVal)
        }
    },
    computed:{
        res(){
            return this.color + this.texts
        }
    }
}
</script>


<style lang="less">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

p {
    font-size: 18px;
    font-weight: bold;
}

#show {
    margin-top: 10px;
    height: 100px;
    width: 100px;
    border: 1px solid black;
}
</style>