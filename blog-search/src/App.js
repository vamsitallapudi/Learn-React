import './App.css';
import { Component } from 'react';


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
    .then(users => this.setState({blogposts: users}));
  }

  render() {
    return (
      <div className="App">
        {
          this.state.blogposts.map(post => <h1 key={post.id}>{post.name}</h1>)
        }
      </div>
    ); 
  }
}

export default App;
