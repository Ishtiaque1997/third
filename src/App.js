import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import CoursesList from './Components/CoursesList/CoursesList';

function App() {
  return (
    <div className="App">
    <Header></Header>
    <CoursesList></CoursesList>
      </div>
  );
}

export default App;
