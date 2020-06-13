import React, {Component,Fragment} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


class BookItem extends Component{
    
    render(){
        
        return (
            <div  className='grid-item'>  
                <div  className='grid-container2'>
                    <div className='grid-item2'>
                        <img src={this.props.modulename.bookimg}  alt="Not Found" style={{width:'250px'}}/>
                    </div>
                    <div className='grid-item2'>
                        <h3>{this.props.modulename.bookname}</h3>
                        <p>{this.props.modulename.bookdesc}</p>
                        <a href={this.props.modulename.booklink}>View Snippet</a>
                        <a href={this.props.modulename.booklink}>Buy Here</a>
                    </div>
                </div>
            </div>
            )
        
    }
}

export default BookItem;