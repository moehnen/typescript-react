import * as React from 'react'
export let __hotReload = true

export const HelloList = ({items}) =>
    <div>
        {items.map(item => 
        <div key={item.id}>
            {item.text}
        </div>
        )} 
    </div>;
