import React from 'react';


class NodeComp extends React.Component {
    render(props) {
        return (
            <div className='nodedisplay'>
                <p>Subject: {this.props.subject}</p>
                <p>Amount: {this.props.amount}</p>
            </div>
        )
    }
}

export default NodeComp;