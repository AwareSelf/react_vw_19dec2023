import logo from './logo.svg';
import './App.css';
import { data } from 'jquery';
import Emp from './Emp';
import Emp1 from './Emp1';
import Emparr from './Emparr';
import Emparr1 from './Emparr1';
import Emp11 from './Emp11';
import Emp111 from './Emp111';
import Empx from './Empx';
import Empx1 from './Empx1';

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
       <hr/>
       <p>Emp sal conditional rendering using if-else syntax</p>
       <Emp1 id={1} name={'Namrata'} salary={3000} />
       <hr/>
       <p>Emp sal conditional rendering using && operator</p>
       <Empx id={1} name={'Namrata'} salary={3000} />
       <hr/>
       <p>Emp sal conditional rendering using Ternary operator</p>
       <Empx1 id={1} name={'Namrata'} salary={3000} />
       <hr/>
       <p>Emp sal conditional rendering using if-else syntax and child component.</p>
       <Emp11 id={1} name={'Namrata'} salary={3000}/>
       <hr/>
       <p>Emp sal conditional rendering using if-else syntax and JS variable and child component.</p>
       <Emp111 id={1} name={'Namrata'} salary={3000}/>
       <hr/>
       <p>Show Emp array using JSX map function and ul-li tags</p>
       <Emparr />
       <hr/>
       <p>Show Emp array using JSX map function and child Emp component</p>
       <Emparr1/>
      
       
    </div>
  );
}

export default App;
