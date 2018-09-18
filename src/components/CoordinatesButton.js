import React, { Component } from 'react'

class CoordinatesButton extends React.Component{

    getCoords = (event) => {
        this.props.onReceiveCoordinates([event.clientX,event.clientY])
    }

    render(){
        return(
            <button onClick={this.getCoords}/>
        )
    }

}

export default CoordinatesButton