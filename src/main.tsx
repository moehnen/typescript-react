import * as React from 'react'
import {render} from 'react-dom'
import {HelloComponent}  from './component'
import {HelloList}  from './list'
import {testItems} from './items'

export let __hotReload = true

let component = render(
    <div>
        <h1>Hallo <HelloComponent /></h1>
        <HelloList items={testItems} />
    </div>,
    document.getElementById('app')
);