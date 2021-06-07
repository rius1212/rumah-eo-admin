<template>
    <v-app id="bg-test">
        <v-main>
            <v-container fill-height>
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="8" md="4">
                        <v-card>
                            <v-toolbar dark>
                                <v-spacer></v-spacer>
                                <v-toolbar-title class="headline">RUMAH-EO-ADMIN</v-toolbar-title>
                                <v-spacer></v-spacer>
                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                    <v-text-field single-line outlined dense class="title" label="Email" name="login"
                                        prepend-icon="mdi-account" type="text" v-model="email" />

                                    <v-text-field single-line outlined dense class="title" id="password" label="Password"
                                        name="password" prepend-icon="mdi-lock-alert" type="password"
                                        v-model="password" />
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn @click="login" class="subtitle-1 grey darken-3 white--text" block>Login</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
            <v-snackbar v-model="snackbar" :color="color" :timeout="2000">
                {{ text }}
                <template v-slot:action="{ attrs }">
                    <v-btn text v-bind="attrs" @click="snackbar = false">Close</v-btn>
                </template>
            </v-snackbar>
        </v-main>
    </v-app>
</template>

<script>
    export default {
        data: () => ({
            valid: false,
            email: '',
            password: '',
            snackbar: false,
            color: null,
            text: '',
        }),
        methods: {
            async login() {
                if (this.email === 'admin@siol.com' && this.password === 'admin') {
                    this.snackbar = true;
                    this.color = 'green';
                    this.text = 'Login Berhasil';
                    localStorage.setItem("apiData", "1")
                    location.replace('/')
                } else {
                    this.snackbar = true;
                    this.text = 'Login Gagal';
                    this.color = 'red';
                    this.username = '';
                    this.password = '';
                }
            },
        }
    }
</script>
<style>
    #bg-test {
        background-image: url('../../assets/login-background.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>