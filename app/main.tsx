import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {HelloComponent}  from './component'
import {HelloListItem, HelloList}  from './list'

var testItems : HelloListItem[] =  [
    { id: 1, text: "typescript" },
    { id: 2, text: "react" },
    { id: 3, text: "systemjs" },
];

ReactDOM.render(
    <div>
        <h1>Hello <HelloComponent /></h1>
        <HelloList data={testItems} />
    </div>,
    document.getElementById('app')
);