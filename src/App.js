

import './App.css';
import firebase from './firebaseConfig'
import TimesList from './components/timesList'
import AddTimeEntryForm from './components/addTimeEntryForm';



function App() {
  return (
    <div className="App">
      <h1>Just Do It</h1>
      <TimesList/>
      <AddTimeEntryForm/>
    </div>
  );
}

export default App;

