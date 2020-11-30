import React from 'react';

class RouletteGun extends React.Component{
    static defaultProps = {
        bulletInChamber : 8
      }
    constructor(props){
        super(props);
        this.state={
            chamber: null,
            spinningTheChamber: false
        }
    }
    callback(){

    }

    handleButtonClick= () =>  {
        this.setState({
            spinningTheChamber : true
        })

        this.timeout = setTimeout(()=>{
            this.setState({
                spinningTheChamber: false,
                chamber:Math.ceil(Math.random() * 8)
            })
        }, 1000)
        
      }

      display(){
        if(this.state.spinningTheChamber){
            return "spinning the chamber and pulling the trigger! ..."
        }else if(this.props.bulletInChamber === this.state.chamber){
            return "BANG!!!!"
        }else{
            return "you're safe!"
        }
      }


      componentWillUnmount() {
        clearTimeout(this.timeout) 
      }

    render(){
        return(
        <div>
            <p>{this.display()}</p>
            <button onClick={this.handleButtonClick}>Pull the trigger!</button>
        </div>
        )
    }
}

export default RouletteGun