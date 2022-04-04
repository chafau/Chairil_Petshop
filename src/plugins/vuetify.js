import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#693FBD',
                secondary: '#B866D3',
                anchor: '#8c9eff',
                danger: '#FF0000'
            },
        },
    },
});