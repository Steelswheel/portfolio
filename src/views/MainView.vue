<template>
    <div class="layout">
        <div class="container">
            <AboutComponent/>
            <WorkComponent/>
            <ContactsComponent/>
        </div>
    </div>
</template>

<script>
    import AboutComponent from '@/components/AboutComponent'
    import WorkComponent from '@/components/WorkComponent'
    import ContactsComponent from '@/components/ContactsComponent'

    export default {
        name: 'WorkView',
        components: {
            AboutComponent,
            WorkComponent,
            ContactsComponent
        }
    }
</script>

<style>
    .title {
        font-size: 32px;
        line-height: 100%;
        color: white;
        text-align: center;
    }

    .subtitle {
        font-size: 24px;
        line-height: 100%;
        color: white;
        text-align: center;
    }

    .layout {
        width: 100%;
        min-height: 100%;
        background-image: linear-gradient(-225deg, #7ca8cc 0%, #EACCF8 48%, #6654F1 100%);
    }

    .link {
        color: #FFFFFF!important;
        font-weight: bold;
        text-decoration: unset!important;
    }

    .card {
        border-color: #EACCF8!important;
        color: #FFFFFF!important;
        background: rgba(100, 100, 100, 0.5)!important;
    }
</style>