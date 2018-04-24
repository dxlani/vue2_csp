/**
 * App
 */

import Vue from 'components/base'
import { Component } from 'vue-property-decorator'
import Doc from 'components/Doc'
import template from './App.vue'

@Component({
    name: 'Home',
    mixins: [template],
    
})

@Component({
    name: 'App',
    mixins: [template],
    components: {
        Doc
    }
})
export default class App extends Vue {
    protected created() {}
}
