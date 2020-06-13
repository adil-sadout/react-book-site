import React, {Component, Fragment} from 'react';
import './Navbar.css';

class NavbarCategory extends Component{

    
    
    render(){

        

        return (
            <Fragment>
                <button className='buttonStyle' onClick={e => 
                    {   
                        e.preventDefault();
                        this.props.getCategory(this.props.category.id);
                    }}>
                    {this.props.category.name}
                </button>
            </Fragment>
            /*e => this.upvotes(e, arg1, arg2, arg3)*/
            )
        
    }
}


export default NavbarCategory;