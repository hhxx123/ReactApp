import React, { Component } from 'react'

class Footer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        const {filter,setVisibilityFilter} = this.props;
        return (
            <div>
               <span>Show:</span>
               <button disabled = {filter === "all"}
               onClick ={()=>setVisibilityFilter("all")}
               >All</button>
              
               <button disabled = {filter === "active"}
               onClick ={()=>setVisibilityFilter("active")}
               >Active</button>
               
               <button disabled = {filter === "completed"}
               onClick ={()=>setVisibilityFilter("completed")}>Completed</button>
            </div>
        )
    }
}

export default Footer
//shift + alt +f 格式化文件