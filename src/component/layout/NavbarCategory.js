import React, {Component, Fragment} from 'react';
import './Navbar.css';
import NavbarCategoryItem from './NavbarCategoryItem';
import { v4 as uuidv4 } from 'uuid';

class NavbarCategory extends Component{

    
    
    render(){

        

        return (
            <Fragment>
                <div className='listStyle'>
                        {this.props.categories.map(category =>(
                                    <NavbarCategoryItem key={uuidv4()} getCategory={this.props.getCategory} category={category} />
                                )
                            )
                        }
                </div>
            </Fragment>
            
            )
        
    }
}


export default NavbarCategory;