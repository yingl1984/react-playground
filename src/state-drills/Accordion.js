import React from "react";
import './Accordion.css';

class Accordion extends React.Component {
    static defaultProps={sections:[]};
    state={currentSection:null}
    handleButtonClick(index) {
        this.setState({ currentSection: index })  
    }


    render(){
        return(
            <ul>
                {this.props.sections.map((section,index) => (
                    <li key={index}>
                    <button key={index} onClick={() => this.handleButtonClick(index)}>
                        {section.title}
                    </button>
                    {(this.state.currentSection === index) && <p>{section.content}</p>}
                    </li>
                ))}
            </ul>
        )
    }
}

export default Accordion