/**
 * Header
 */

import Vue from 'components/base'
import { Component, Prop } from 'vue-property-decorator'
import { Button, Select } from 'element-ui'
import template from './Header.vue'
Vue.use(Button)
Vue.use(Select)
@Component({
    name: 'Header',
    mixins: [template]
})
export default class Header extends Vue {
    @Prop({ default: 'World' })
    protected name: string
    protected go() {
        this.name = "HHHH";
        console.log(this.name)
    }
}
