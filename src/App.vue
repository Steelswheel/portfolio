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
        },
        methods: {
            onResize() {
                let width = document.documentElement.clientWidth;

                this.align = width > 575 ? 'alternate' : '';
            },
            dispatchResizeEvent() {
                //используется для обхода бага библиотеки AOS
                window.dispatchEvent(new Event('resize'));
                console.log('работает');
            }
        },
        mounted() {
            window.addEventListener('resize', this.onResize);
            window.addEventListener('load', this.dispatchResizeEvent);
        },
        unmount() {
            window.removeEventListener('resize', this.onResize);
            window.removeEventListener('load', this.dispatchResizeEvent);
        }
    }
</script>

<style lang="scss">
    html, body, #app {
        height: 100%!important;
        width: 100%!important;
    }
</style>