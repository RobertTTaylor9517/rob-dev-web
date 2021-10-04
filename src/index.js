import _ from 'lodash'
import {generateBackground} from './background.js'
import {generateMain} from './main.js'

function component(){
    generateBackground()
    generateMain()
}

component()