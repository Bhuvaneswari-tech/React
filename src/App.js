import logo from './logo.svg';
import './App.css';
import Counter from './components/Hooks/Counter';
import Timer from './components/Hooks/Timer';
import Context from './components/Hooks/Context';
import FocusInput from './components/Hooks/FocusInput';
import CallBack from './components/Hooks/CallBack';
import SubmitForm from './components/Forms/SubmitForm';
import FetchAPI from './components/Hooks/FetchAPI';
import SearchQuery from './components/Hooks/SearchQuery';
import TodoAPI from './components/Hooks/TodoAPI';

function App() {
  return (
    <div>
      {/* <Counter />
      <Timer />
      <Context />
      <FocusInput /> 
      <CallBack /> 
      <SubmitForm />
      <FetchAPI />
      <SearchQuery />
      */}
      
      <TodoAPI />
    </div>
  );
}

export default App;
