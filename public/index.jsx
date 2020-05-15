//import React from 'react';
//import {render} from 'react-dom';
//import Links from './jsx/link.jsx';
//import indexCss from './css/index.less';

// class Hello extends React.Component {
//     render() {
//         return (
//             <Links/>
//         )
//     }
// }


// render(
//     <Hello/>,
//     document.getElementById('root')
// )


// import store from '../public/jsx/store.jsx';
// import { addToCart,changeToCart,deleteToCart }  from '../public/jsx/actions/cart-actions.jsx';
// import { addToProduct } from '../public/jsx/actions/product-actions.jsx';
//
// //console.log("initial state: ", store.getState());
//
// let unsubscribe = store.subscribe(() =>
//     console.log(store.getState())
// );
//
// //store.dispatch(addToCart('Coffee 500gm', 1, 250));
// //store.dispatch(addToCart('Flour 1kg', 2, 110));
// store.dispatch(addToCart('Juice 2L', 1, 250));
// store.dispatch(addToProduct(400));
// store.dispatch(changeToCart('Juice 2L', 1, 500));
// store.dispatch(deleteToCart('Juice 2L'));
//
// unsubscribe();
//
// import React from 'react';
// import ReactDOM from 'react-dom';
// import {Provider} from 'react-redux';
//
// const App = <h1>React-redux</h1>
// ReactDOM.render(
//     <Provider store = {store}>
//         {App}
//     </Provider>,
//     document.getElementById("root")
// );


import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './jsx/reducers/todoApp.jsx'
import App from './jsx/component/App.jsx'

let store = createStore(todoApp)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)















