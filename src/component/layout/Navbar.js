import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import NavbarCategory from './NavbarCategory';
import { v4 as uuidv4 } from 'uuid';



class Navbar extends Component {

    state = {
        classHidden: true
    }

    openMenu = () =>{
        this.setState({classHidden: !this.state.classHidden});
      }

    render(){

        let boxClass = ["navMenu"];
        if(this.state.classHidden) {
            boxClass.push('hidden');
        }
        

        

        return(
            <nav>
                <div className='navStyle'>


                    <button  className='navButtonStyle' onClick={ this.openMenu }>
                        <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo"/>
                    </button>




                    <div className='listStyle'>
                        {this.props.categories.map(category =>(
                                    <NavbarCategory key={uuidv4()} getCategory={this.props.getCategory} category={category} />
                                )
                            )
                        }
                    </div>
                </div>




                <div className={boxClass.join(' ')}>
                    <Link to='/' className='hiddenList'>
                        Home
                    </Link>
                    <Link to='/About' className='hiddenList'>
                        About
                    </Link>
                    <Link to='/Contact' className='hiddenList'>
                        Contact
                    </Link>
                </div>

            </nav>
        )
    }
}









export default Navbar;