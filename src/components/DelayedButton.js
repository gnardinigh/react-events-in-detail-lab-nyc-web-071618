import React, { Component } from 'react'

class DelayedButton extends React.Component{
    constructor(props){
        super(props)
        // this.handleOnDelayedClick = this.handleOnDelayedClick.bind(this)
    }

        handleOnDelayedClick = (event) => {
            event.persist()
            setTimeout(()=>{this.props.onDelayedClick(event)},this.props.delay)
        }

    
    render(){
        return(
        <button onClick={this.handleOnDelayedClick}/>
        )
    }

}

export default DelayedButton