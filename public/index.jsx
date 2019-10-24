import React from 'react';
import { render } from 'react-dom';
import Links from './link.jsx'
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