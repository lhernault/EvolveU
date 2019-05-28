import React, { Component } from 'react';
import FifoLifo from './FifoLifo.js';

class FifoLifoComp extends Component {
	constructor() {
    	super();
    	this.state={ 
    		arrList:new FifoLifo(),
    		view: '',
            input: ''
      
    	}
       
    }
        onInsert = () => {
        console.log('insert');
        let list = this.state.arrList;
        list.insert(this.state.input);
        console.log(list);
        this.setState({
            arrList: list,
            view:''
        })
    }
     onInsertDisplay = () => {
        return (
           <div id='insertinfo' className='inserting'>
               <input onChange={this.onChange} id= 'enteritem' type='text' placeholder='Add Item'></input>
               <button className = "btnlifo" onClick={this.onInsert}>Submit</button>
           </div>
        )
    }
  onChange = (e) => {
        if(e.target.id === 'enteritem') {
            console.log('changing', e.target.value);
            this.setState({
                input: e.target.value
            })
        }
    }
    onStateChange = () => {
		this.setState({
			view: 'add'
		})
    }

	onFifo = () => {
        console.log('Deleting FIFO');
        let list = this.state.arrList;
        list.delFifo();
        console.log(list);
        this.setState({
            arrList: list
        })
    }

    
     onLifo = () => {
        console.log('Deleting LIFO');
        let list = this.state.arrList;
        list.delLifo();
        console.log(list);
        this.setState({
            arrList: list
        })
    }



    render() {
    	 const renderList = this.state.arrList.arr.map((item,i) => {
            return <ol><li className = "li-lifo" key={i}>{item}</li></ol>
        })
       
        return(
            <div>
                <div>
                    {this.state.view === 'add' && this.onInsertDisplay()}
                </div>
                
            <div className='displaylist'>{renderList}</div>
                <button onClick={this.onStateChange} className = "btnlifo">Insert</button>
                <button onClick={this.onFifo} className = "btnlifo">Fifo</button>
                <button onClick={this.onLifo} className = "btnlifo">Lifo</button>
            </div>
        )
    }
}

export default FifoLifoComp;