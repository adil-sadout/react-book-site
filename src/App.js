import React, {Component, Fragment} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './component/layout/Navbar';
import Book from './component/books/Book';
import About from './component/pages/About';
import Contact from './component/pages/Contact';

class App extends Component {


  
  state = {

    mainId: '1',


    /*used as sample database*/ 
    categories:
    [


      {/**/ 
        id:'0',
        name:'informatique',
        modules:
          {algorithme:[
              {
                bookname:'brahim',
                bookdesc:'just a desc',
                booklink:'google.com',
                bookimg:'https://i.stack.imgur.com/IHQ3X.png'
              },
              {
                bookname:'nngrrg',
                bookdesc:'just a descgrerg',
                booklink:'google.com'
              }
            ],
            algebre:[
              {
                bookname:'brahim',
                bookdesc:'just a desc',
                booklink:'google.com',
                bookimg:''
              },
              {
                bookname:'nngrrg',
                bookdesc:'just a descgrerg',
                booklink:'google.com'
              }
            ]
          }
        
        }
      ,/** */




      {/** */
        id:'1',
        name:'hello2',
        modules:
        {algorithme:[
          {
            bookname:'brahim2',
            bookdesc:'just a desc',
            booklink:'google.com',
            bookimg:'https://i.stack.imgur.com/IHQ3X.png'
          },
          {
            bookname:'nngrrg',
            bookdesc:'just a descgrerg',
            booklink:'google.com'
          }
        ],
        algebre:[
          {
            bookname:'brahim',
            bookdesc:'just a desc',
            booklink:'google.com',
            bookimg:''
          },
          {
            bookname:'nngrrg',
            bookdesc:'just a descgrerg',
            booklink:'google.com'
          }
        ]
      }
      },/** */



      {/** */
        id:'2',
        name:'hello3',
        modules:
        {algorithme:[
          {
            bookname:'brahim3',
            bookdesc:'just a desc',
            booklink:'google.com',
            bookimg:'https://i.stack.imgur.com/IHQ3X.png'
          },
          {
            bookname:'nngrrg',
            bookdesc:'just a descgrerg',
            booklink:'google.com'
          }
        ],
        algebre:[
          {
            bookname:'brahim',
            bookdesc:'just a desc',
            booklink:'google.com',
            bookimg:''
          },
          {
            bookname:'nngrrg',
            bookdesc:'just a descgrerg',
            booklink:'google.com'
          }
        ]
      }
      }/** */
    ]

    /*End of database*/


  }


  getCategory = (value) =>{
    this.setState({
      mainId: value
    });
  }




  render(){

    
 

    return (
      <Router>
        <div className="App">
        
          



          <Switch>
                  <Route exact path='/' render={props =>(
                    <Fragment>
                      <Navbar categories={this.state.categories}  getCategory={this.getCategory.bind(this)}/>
                      <Book categories={this.state.categories} mainId={this.state.mainId}/>
                    </Fragment>
                  )} />

                  <Route exact path='/about' component={About}/>

                  <Route exact path='/about' component={Contact}/>
                  

              </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
