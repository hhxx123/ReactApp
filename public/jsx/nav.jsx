import * as React from 'react';
import {render} from 'react-dom';

const eventsArr = [
    'handleGoPage'
]
export default class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navLeftItems: [
                {
                    title:"page",
                    url:"http://localhost:8080/page"
                },
                {
                    title:'2',
                    url:"http://localhost:8080/page"
                }
            ]
        };
        eventsArr.map((ev) => {
            this[ev] = this[ev].bind(this);
        })
    }

    handleGoPage(url) {
        window.open(url);
    }

    render() {
        return (
            <div>
                <div style={{float:"left",width:"30%"}}>
                    {this.state.navLeftItems.map((item,index) =>{
                        return <div key={index} onClick={this.handleGoPage.bind(this,item.url)}>111{item.title}</div>
                    })}
                </div>
                <div style={{float:"left"}}>
                    content
                </div>
            </div>

        )
    }
}