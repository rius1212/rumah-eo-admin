<template>
    <v-container>
        <v-container>
            <v-row>
                <v-col md="3" sm="6">
                    <v-card class="mx-auto" max-width="300" hover to="/kategori" link>
                        <v-img class="white--text align-end" height="200px" src="../../assets/kategori.jpg">
                            <v-card-title class="justify-center" style="background-color: #fff; color:#2D3748 ;word-break: normal">Kategori
                            </v-card-title>
                        </v-img>
                    </v-card>
                </v-col>
                <v-col md="3" sm="6">
                    <v-card class="mx-auto" max-width="300" hover to="/highlight" link>
                        <v-img class="white--text align-end" height="200px" src="../../assets/trending.jpg">
                            <v-card-title class="justify-center" style="background-color: #fff; color:#2D3748 ;word-break: normal">Highlight
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
