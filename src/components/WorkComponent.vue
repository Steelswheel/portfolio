<template>
    <section class="work mb-4">
        <h1 class="title mb-4">Карьера</h1>
        <Timeline :value="events" :align="align" class="work-timeline">
            <template #marker>
                <i class="pi pi-chevron-circle-down" style="font-size: 20px; color: white"></i>
            </template>
            <template #content="slotProps">
                <aos-vue :animation="slotProps.index % 2 > 0 ? 'fade-right' : 'fade-left'">
                    <div class="card">
                        <img 
                            v-if="slotProps.item.img" 
                            :src="slotProps.item.img"
                            class="card-img-top" 
                            alt="card-img"
                        >
                        <div class="card-body">
                            <h5 class="card-title">
                                <b>{{ slotProps.item.date }}</b>
                            </h5>
                            <h6 class="card-subtitle text-body-secondary">
                                {{ slotProps.item.status }}
                            </h6>
                            <div class="card-text mt-4" v-html="slotProps.item.text"></div>
                            <div class="card-gallery mt-4 d-none d-md-block" v-if="slotProps.item.gallery">
                                <Carousel 
                                    :value="slotProps.item.gallery" 
                                    :numVisible="2" 
                                    :numScroll="1"
                                    :responsiveOptions="responsiveOptions"
                                    :showIndicators="false"
                                >
                                    <template #item="image">
                                        <Image :src="image.data.itemImageSrc" alt="Image" preview />
                                    </template>
                                </Carousel>
                            </div>
                            <div class="card-links mt-4">
                                <a
                                    v-for="link in slotProps.item.links" 
                                    :key="link.address" 
                                    :href="link.address" 
                                    class="card-link link"
                                    target="_blank"
                                    :download="link.download"
                                >
                                    {{ link.text }}
                                </a>
                            </div>
                        </div>
                    </div>
                </aos-vue>
            </template>
        </Timeline>
    </section>
</template>

<script>
    import Timeline from 'primevue/timeline'
    import Carousel from 'primevue/carousel'
    import Image from 'primevue/image'

    export default {
        name: 'WorkComponent',
        components: {
            Timeline,
            Carousel,
            Image
        },
        data() {
            return {
                align: 'alternate',
                responsiveOptions: [
                    {
                        breakpoint: '1199px',
                        numVisible: 3,
                        numScroll: 3
                    },
                    {
                        breakpoint: '991px',
                        numVisible: 2,
                        numScroll: 2
                    },
                    {
                        breakpoint: '767px',
                        numVisible: 1,
                        numScroll: 1
                    }
                ],
                events: [
                    {
                        date: '2011-2015',
                        status: 'Учеба в ЮУрГУ',
                        text: 'Специальность "Промышленная теплоэнергетика"',
                        img: '../img/university.webp'
                    },
                    {
                        date: '2015-1016',
                        status: 'Служба в армии',
                        text: 'В/ч 35390, г. Южно-Сахалинск',
                        img: '../img/sakhalin.webp'
                    },
                    {
                        date: '2017-2020',
                        status: 'Работа по специальности',
                        text: 'Работал в ПАО Фортум и АО ТЭО',
                        img: '../img/tec.webp'
                    },
                    {
                        date: '2020',
                        status: 'Создаватель',
                        text: 'Прошел месячную стажировку в компании "Создаватель" в Челябинске. Сдал первый экзамен на сертификат разработчика 1С-Битрикс.',
                        img: '../img/bitrix.webp',
                        links: [
                            {
                                text: 'Сертификат',
                                address: '../files/cert.pdf',
                                download: true
                            }
                        ]
                    },
                    {
                        date: '2020-2021',
                        status: 'Digital agency INTEC',
                        text: 'Работал в отделе разработки готовых решений для сайтов на 1С-Битрикс: создавал компоненты, правил верстку. Первой задачей было создание интерактивных брифов для получения заявок от клиентов на ванильном JS',
                        img: '../img/intec.webp',
                        links: [
                            {
                                text: 'Сайт INTEC',
                                address: 'https://intecweb.ru'
                            },
                            {
                                text: 'Бриф 1',
                                address: 'https://development.intecweb.ru'
                            },
                            {
                                text: 'Бриф 2',
                                address: 'https://seo.intecweb.ru'
                            },
                            {
                                text: 'Бриф 3',
                                address: 'https://design.intecweb.ru'
                            }
                        ]
                    },
                    {
                        date: '2021-2023',
                        status: 'Работа в кредитных потребительских кооперативах',
                        text: 'КПК занимаются выдачей займов для покупки недвижимости под сертификат материнского капитала или регионального семейного капитала. Партнерами КПК являются региональные риелторы. <div class="mt-2" style="text-align: left">Обязанности: <ul style="padding-left: 15px"><li>Разработка компонентов для CRM Bitrix24 - всевозможные таблицы со статистикой, графики;</li> <li>Кастомные доработки для стандартного функционала Битрикс;</li> <li>Поддержка работоспособности сайтов компаний, актуализация информации, доработка, SEO-оптимизация;</li> <li>Верстка сайта для КПК ТЭК (Yii2 + Vue). Сейчас кооператив ликвидирован, код сайта можно найти в моем репозитории;</li> <li>Для КПК ТРЕСТ был разработан личный кабинет партнера - там отображены все данные по сделкам, которые завел сам партнер или менеджер (написан на основе панели Metronic 8, React + PHP);</li> <li>В разработке находится мобильное приложение для сберегательных программ в КПК ТРЕСТ (React Native);</li></div>',
                        img: '../img/trest.svg',
                        links: [
                            {
                                text: 'Сайт ТРЕСТ',
                                address: 'https://trest24.ru'
                            }
                        ],
                        gallery: [
                            {
                                itemImageSrc: '../img/tek_1.webp'
                            },
                            {
                                itemImageSrc: '../img/tek_2.webp'
                            },
                            {
                                itemImageSrc: '../img/tek_3.webp'
                            },
                            {
                                itemImageSrc: '../img/trest_1.webp'
                            },
                            {
                                itemImageSrc: '../img/trest_2.webp'
                            },
                            {
                                itemImageSrc: '../img/trest_3.webp'
                            },
                            {
                                itemImageSrc: '../img/trest_4.webp'
                            }
                        ]
                    }
                ]
            }
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
    .work {
        .p-carousel-item {
            .p-image {
                margin: 0 0.5rem;

                &-preview-indicator {
                    border: none;
                }

                img {
                    max-width: 100%;
                }
            }
        }

        .p-timeline {
            @media all and (max-width: 575px) {
                .p-timeline-event-opposite {
                    display: none;
                }

                .p-timeline-event-content {
                    padding: 1rem!important;
                }
            }
        }
    }
</style>