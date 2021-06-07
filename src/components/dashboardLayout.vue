<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" app v-if="cekLogin">
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>
                        Admin
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        SIOL-BCA
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list>
                <v-list-item-group v-model="selectedItem" color="primary">
                    <v-list-item v-for="(item, i) in items" :key="i" :to="item.link" link>
                        <v-list-item-icon>
                            <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title v-text="item.text"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>

            </v-list>
            <template v-slot:append>
                <div class="pa-2" >
                    <v-btn block color="#0D5CAB" @click="logout" dark>
                        Logout
                    </v-btn>
                </div>
            </template>
        </v-navigation-drawer>

        <v-app-bar app v-if="cekLogin">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <router-link to="/">
                <v-img class="mx-2" src="../assets/logo-eo.png" max-height="100" max-width="100" contain></v-img>
            </router-link>
        </v-app-bar>

        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script>
    export default {
        data: () => ({
            drawer: null,
            selectedItem: 1,
            cekLogin: null,
            items: [{
                    text: 'Dashboard',
                    icon: 'mdi-view-dashboard',
                    link: '/'
                },
                {
                    text: 'Master Data',
                    icon: 'mdi-database',
                    link: '/masterdata'
                },
                {
                    text: 'Master Iklan',
                    icon: 'mdi-database',
                    link: '/masteriklan'
                },
                {
                    text: 'Iklan',
                    icon: 'mdi-television-guide',
                    link: '/iklan'
                },
                {
                    text: 'Feedback',
                    icon: 'mdi-file-find',
                    link: '/feedback'
                },
                {
                    text: 'Report',
                    icon: 'mdi-file-document',
                    link: '/report'
                }
            ],
        }),
        methods:{
            cekLoginMethod() {
                if (!JSON.parse(localStorage.getItem('apiData'))) {
                    this.cekLogin = null
                } else {}
                this.cekLogin = JSON.parse(localStorage.getItem('apiData'))
            },
            logout() {
                localStorage.removeItem("apiData")
                location.reload();
            },
        },
        mounted() {
            this.cekLoginMethod();
        }
    }
</script>