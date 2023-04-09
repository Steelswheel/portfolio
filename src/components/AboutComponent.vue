<template>
    <aos-vue animation="fade-down">
        <section class="about pt-4 mb-4">
            <h1 class="title mb-4">Обо мне</h1>
            <div class="card">
                <div class="p-4 mb-2 text-center">
                    <div class="mb-4">
                        <img class="about-photo" src="/img/me.webp" alt="me">
                    </div>
                    <div>
                        Привет, меня зовут Александр. Мне 29 лет. До апреля 2022 года жил в Челябинске, позже переехал в Ереван.<br>
                        Изучаю web-разработку с 2018 года. Не люблю скучные проекты, писать код "в стол" и спешить.<br>
                        Умею разбираться в чужом коде, быстро изучать новые технологии. Усидчив, обучаем.
                    </div>
                </div>
                <div class="p-2">
                    <h2 class="subtitle mb-4">
                        Увлекаюсь
                    </h2>
                    <div class="row about-list">
                        <div class="col-4 p-2">
                            <div class="d-md-flex justify-content-center align-items-center text-center">
                                <img class="about-list-icon" src="../assets/boxing_icon.svg" alt="boxing">
                                <div class="mt-2 mt-md-0 ms-md-3 about-list-text">Спорт</div>
                            </div>
                        </div>
                        <div class="col-4 p-2">
                            <div class="d-md-flex justify-content-center align-items-center text-center">
                                <img class="about-list-icon" src="../assets/book_icon.svg" alt="book">
                                <div class="mt-2 mt-md-0 ms-md-3 about-list-text">Книги</div>
                            </div>
                        </div>
                        <div class="col-4 p-2">
                            <div class="d-md-flex justify-content-center align-items-center text-center">
                                <img class="about-list-icon" src="../assets/tourism_icon.svg" alt="tourism">
                                <div class="mt-2 mt-md-0 ms-md-3 about-list-text">Путешествия</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="p-2">
                    <h2 class="subtitle mb-4">
                        Знаю
                    </h2>
                    <div class="row about-list">
                        <div class="col-4 p-2">
                            <div class="d-md-flex justify-content-center align-items-center text-center">
                                <img class="about-list-icon" src="../assets/vue_icon.webp" alt="vue">
                                <div class="mt-2 mt-md-0 ms-md-3 about-list-text">Vue</div>
                            </div>
                        </div>
                        <div class="col-4 p-2">
                            <div class="d-md-flex justify-content-center align-items-center text-center">
                                <img class="about-list-icon" src="../assets/react_icon.webp" alt="react">
                                <div class="mt-2 mt-md-0 ms-md-3 about-list-text">React</div>
                            </div>
                        </div>
                        <div class="col-4 p-2">
                            <div class="d-md-flex justify-content-center align-items-center text-center">
                                <img class="about-list-icon" src="../assets/php_icon.webp" alt="php">
                                <div class="mt-2 mt-md-0 ms-md-3 about-list-text">PHP</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </aos-vue>
</template>

<script>
    export default {
        name: 'AboutComponent',
        components: {},
        data() {
            return {}
        }
    }
</script>

<style lang="scss">
    .about {
        &-photo {
            max-width: 350px;

            @media all and (max-width: 575px) {
                max-width: 100%;
            }
        }

        &-list {
            &-icon {
                width: 50px;
            }

            &-text {
                color: white;
                font-size: 16px;
            }
        }
    }
</style>