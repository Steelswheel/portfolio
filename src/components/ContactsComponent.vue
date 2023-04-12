<template>
    <section class="contacts">
        <h1 class="title mb-4">
            Связаться со мной
        </h1>
        <div class="card">
            <div class="row">
                <div class="col-6 col-md-4 col-lg-2 py-2">
                    <a class="link" href="mailto:steelswheel@gmail.com">
                        <i class="pi pi-send"></i>
                        <b class="mx-2">Email</b>
                    </a>
                </div>
                <div class="col-6 col-md-4 col-lg-2 py-2">
                    <a class="link" href="https://github.com/steelswheel" target="_blank">
                        <i class="pi pi-github"></i> 
                        <b class="mx-2">Git</b>
                    </a>
                </div>
                <div class="col-6 col-md-4 col-lg-2 py-2">
                    <a class="link" href="https://discordapp.com/users/967866617126068244" target="_blank">
                        <i class="pi pi-discord"></i>
                        <b class="mx-2">Discord</b>
                    </a>
                </div>
                <div class="col-6 col-md-4 col-lg-2 py-2">
                    <a class="link" href="https://www.linkedin.com/in/alexander-levitskiy-9a42b9272/" target="_blank">
                        <i class="pi pi-linkedin"></i>
                        <b class="mx-2">LinkedIn</b>
                    </a>
                </div>
                <div class="col-6 col-md-4 col-lg-2 py-2">
                    <a class="link" href="https://t.me/steelswheel" target="_blank">
                        <i class="pi pi-telegram"></i>
                        <b class="mx-2">Telegram</b>
                    </a>
                </div>
                <div class="col-6 col-md-4 col-lg-2 py-2">
                    <a class="link" href="https://vk.com/steelswheel" target="_blank">
                        <img class="icon" src="../assets/vk-icon.svg" alt="vk">
                        <b class="mx-2">VK</b> 
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'ContactsComponent'
    }
</script>

<style lang="scss" scoped>
    .contacts {
        .icon {
            width: 16px;
            height: 16px;
            vertical-align: text-top;
        }
        .link {
            color: white !important;
        }

        .card {
            text-align: center;
        }
    }
</style>