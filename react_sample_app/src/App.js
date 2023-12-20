import logo from './logo.svg';
import './App.css';
import { data } from 'jquery';
import Emp from './Emp';
import Emp1 from './Emp1';
import Emparr from './Emparr';
import Emparr1 from './Emparr1';
import Emp11 from './Emp11';
import Emp111 from './Emp111';

//these are similar in functionality toc class but you create it using function syntax
//react - functional components  
//functional components can work with all React hooks

/*
UI component - React Functional component/Angular component
  1) component properties /data
  2) component functions (which will modify properties in some way)
  3) UI template associated with it (which will rendered as component)
  4) props are used to initialise component properties. They are readonly.
*/
function App() {
  return (
    <div>
     
       <h4> All! Welcome to React Training</h4>
       <hr/>
       <Emp id={1} name={'Namrata'} salary={2000} />
       <Emp1 id={1} name={'Namrata'} salary={3000} />
       <Emparr />
       <hr/>
       <Emparr1/>
       <hr/>
       <Emp11 id={1} name={'Namrata'} salary={3000}/>
       <hr/>
       <Emp111 id={1} name={'Namrata'} salary={3000}/>
       
       
    </div>
  );
}

export default App;
