<!-- Test component -->
<template>
    <div class="test-container">
        <!-- header 部分 -->
        <div class="header-box">
            <slot name="title" val="test title" :user="userInfo"></slot>
        </div>

        <!-- content 部分 -->
        <div class="content-box">
            <slot name="content" msg="this is content" text="content box"></slot>
        </div>
        <!-- footer 部分 -->
        <div class="footer-box">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
export default {
    // name: 'Test',
    data() {
        return {
            userInfo:{
                name: 'zs',
                age: 21
            }
        };
    },

    components: {},

    computed: {},

    //   mounted: {},

    methods: {}
}

</script>
<style lang='less' scoped>
.test-container {
    width: 100%;
    >div {
        min-height: 150px;
    }

    .header-box {
        background-color: lightgray;
        height: 100px;
    }

    .content-box {
        background-color: lightcoral;
    }

    .footer-box {
        background-color: lightsalmon;
    }
}
</style>