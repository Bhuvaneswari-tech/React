import './App.css';
import ChildClass from './components/ChildClass';
import ChildFun from './components/ChildFun';
import ClassState from './components/ClassState';
import Funstate from './components/Funstate';
import Container from './components/lifecycle/Container';
import Header from './components/lifecycle/Header';
import Update from './components/lifecycle/Update';
import Counter from './components/statemanagement/Counter';
import Student from './components/statemanagement/Student';
import Skills from './components/statemanagement/Skills';
import LoginForm from './components/statemanagement/LoginForm';
import PasswordVisibility from './components/statemanagement/PasswordVisibility';
import WIFICheck from './components/Apps/WIFICheck';
import QuizApp from './components/Apps/QuizApp';

function App() {
  const arr = ["HTML",", ","CSS",", " ,"JavaScript"]
  return (
    <div className="App">
      {/* <Funstate />
      <ClassState />
      <ChildClass text={"1st value"} />
      <ChildClass text={"2nd value"} />
      <ChildFun greeting={"Hello Sandy"} quote={"Good Morning"} 
      proverb={"evening proverb"} />
        <Header favcol="Yellow" />
      <Header />
      <Update />
      <Container />
      <Counter />
      <Student
      firstName= "John"
      lastName="Doe"
      email="john@example.com"
      />

      <Student
      firstName="Ramesh"
      lastName="Fadatare"
      email="ramesh@example.com"
      />

      <Skills data={arr} />
      <LoginForm />
      <PasswordVisibility />
       <WIFICheck />
       */}
      
     <QuizApp />
      
    </div>
  );
}

export default App;
