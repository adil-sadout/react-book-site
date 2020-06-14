import React, {Component, Fragment} from 'react';
import './Navbar.css';

class NavbarCategoryItem extends Component{

    
    
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
            )
        
    }
}


export default NavbarCategoryItem;