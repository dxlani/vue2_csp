/**
 * Home
 */

import Vue from 'components/base'
import { Component } from 'vue-property-decorator'
import template from './Home.vue'
import Header from 'components/Header'

@Component({
    name: 'Home',
    mixins: [template],
    components: {
        Header,
    }
})
export default class Home extends Vue {
    protected async created() {
        // api example
        try {
            let res = await this.api.getPackage({})
            console.log(res.content)
        } catch (err) {
            console.log(err)
        }
    }
    protected beforeRouteEnter(to, from, next) {
        console.log('before home enter')
        next()
    }

    protected beforeRouteLeave(to, from, next) {
        console.log('before home leave')
        next()
    }
}
