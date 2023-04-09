<template>
    <MainView/>
</template>

<script>
    import MainView from '@/views/MainView'

    export default {
        name: 'App',
        components: {
            MainView
        },
        data() {
            return {}
        }
    }
</script>

<style lang="scss">
    html, body, #app {
        height: 100%!important;
        width: 100%!important;
    }
</style>