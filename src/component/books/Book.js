import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Book.css';
import BookItem from './BookItem';
import { v4 as uuidv4 } from 'uuid';

class Book extends Component{
    render(){
        const {mainId} = this.props;
        return(
            <div className='grid-container'>
                <p>{this.props.mainId}</p>
                

                {this.props.categories[this.props.mainId].modules.algorithme.map(modulename =>(
                                    <BookItem  key={uuidv4()}  modulename={modulename} />
                                )
                            )
                }
                
            </div>
        )
    }
}


export default Book;