import './App.css';
import { Component } from 'react';
import {CardList} from './components/card-list/card-list.component';


class App extends Component {
  constructor() {
    super();
    this.state =  {

      blogposts: [
        {
          name: 'Coroutines in Kotlin',
          id: '1'
        },
        {
          name: 'Flows in Kotlin',
          id: '2'
        },
        {
          name: 'RxJava vs Coroutines',
          id: '3'
        }
      ],
      string: 'Welcome Vamsi Krishna!'
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({blogposts: users}))
    .catch(error=> {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="App">
        <CardList posts={this.state.blogposts}/>
      </div>
    ); 
  }
}

export default App;
