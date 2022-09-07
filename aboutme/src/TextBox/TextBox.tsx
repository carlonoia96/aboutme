import React, { FC } from 'react';
import './TextBox.css';

interface TextBoxProps {
    background:string;
    text:any
}

class TextBox extends React.Component<TextBoxProps>{
    render() {
        return (<>
            <div className={"text-box hover-effect"}>
                <div className={`container ${this.props.background} white text-align-center`}>
                    {this.props.text}
                </div>
            </div>
        </>);
    }
}

export default TextBox;
