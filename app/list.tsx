import * as React from 'react'
import * as ReactDOM from 'react-dom'

export interface HelloListItem {
    id: number,
    text: string
}

interface HelloListComponent {
    data: HelloListItem[]
}

var HelloList = React.createClass<HelloListComponent, {}>({
    render: function () {
        var items = this.props.data.map(item =>
            <div>
                {item.text}
            </div>
        );

        return (
            <div>
                {items}
            </div>
        );
    }
});

export { HelloList };