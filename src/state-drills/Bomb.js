import React from 'react';

class Bomb extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count : 0,
            text : 'tick'
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            const newCount = this.state.count + 1;
          this.setState({
            count: newCount
          })
          if(this.state.count >= 8){
            clearInterval(this.interval)
            this.setState({
                text: 'BOOM!!!!'   
            })

          }else{
            if(this.state.count % 2 === 0){
                this.setState({
                    text: 'tick'   
                })
              }else{
                this.setState({
                    text: 'tock'   
                })
          }
          
          }
        }, 1000)
      }
      componentWillUnmount() {
        clearInterval(this.interval)
      }

    render(){
        return(
        <div>
            <p>{this.state.text}!</p>
        </div>
        )
    }
}

export default Bomb