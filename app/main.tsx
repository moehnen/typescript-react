import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {HelloComponent}  from './component'
import {HelloList}  from './list'

var data = [
    { id: 1, text: "typescript" },
    { id: 2, text: "react" }
];

ReactDOM.render(
    <div>
        <h1>Hello <HelloComponent /></h1>
        <HelloList data={data} />
    </div>,
    document.getElementById('app')
);