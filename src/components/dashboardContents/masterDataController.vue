<template>
    <v-container>
        <v-container>
            <v-row>
                <v-col md="3" sm="6">
                    <v-card class="mx-auto" max-width="300" hover to="/user" link>
                        <v-img class="white--text align-end" height="200px" src="../../assets/user.jpg">
                            <v-card-title class="justify-center" style="background-color: #fff; color:#2D3748 ;word-break: normal">User
                            </v-card-title>
                        </v-img>
                    </v-card>
                </v-col>
                <v-col md="3" sm="6">
                    <v-card class="mx-auto" max-width="300" hover to="/vendor" link>
                        <v-img class="white--text align-end" height="200px" src="../../assets/vendor.png">
                            <v-card-title class="justify-center" style="background-color: #fff; color:#2D3748 ;word-break: normal">Vendor
                            </v-card-title>
                        </v-img>
                    </v-card>
                </v-col>
                <v-col md="3" sm="6">
                    <v-card class="mx-auto" max-width="300" hover to="/kotaprovinsi" link>
                        <v-img class="white--text align-end" height="200px" src="../../assets/maps.jpg">>
                            <v-card-title class="justify-center" style="background-color: #fff; color:#2D3748 ;word-break: normal">Kota & Provinsi
                            </v-card-title>
                        </v-img>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

    </v-container>
</template>

<script>
    export default {
        data: () => ({
           
        }),
    }
</script>
