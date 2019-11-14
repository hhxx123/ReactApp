import React from 'react';
import { render } from 'react-dom';
import Links from './jsx/link.jsx';
import indexCss from './css/index.less';
class Hello extends React.Component {
    render() {
        return (
             <Links/>
        )
    }
}
render(
    <Hello/>,
    document.getElementById('root')
)