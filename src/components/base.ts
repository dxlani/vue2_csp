/**
 * 所有组件的基类
 */

import Vue from 'vue'
import api from 'api'
import util from 'common/util'
import env from 'env'
import constants from 'common/constants'

export default class Base extends Vue {
    // constants
    protected readonly constants = constants
    // config
    protected readonly config = env
    // backend api
    protected readonly api = api
    // utils
    protected readonly util = util;
}
