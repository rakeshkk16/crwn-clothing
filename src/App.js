import './App.css';
import {HomePage} from './pages/homepage/homepage.component';
import {Switch, Route, Link} from 'react-router-dom';

// const HomePage = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <button onClick={() => props.history.push('/topiclist')}>Topics</button>
//       <h1>HomePage</h1>
//     </div>
//   )
// }

// const TopicList = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>Topic List</h1>
//     </div>
//   )
// }

// const TopicDetails = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>Topic Details</h1>
//     </div>
//   )
// }

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        {/* <Route exact path='/topiclist' component={TopicList}></Route>
        <Route path='/topiclist/:id' component={TopicDetails}></Route> */}
      </Switch>
    </div>
  );
}

export default App;
