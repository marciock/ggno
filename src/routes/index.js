import React  from 'react';
//import Routes from './routes';
import {Parallax} from 'react-materialize';
import {HashRouter,Route, Link} from 'react-router-dom';
import creatHistory from 'history/createBrowserHistory';
import NavBar from '../components/tools/NavBar';
import FooterPage from '../components/tools/FooterPage';
import Home from './Home';
import Indicadores from '../components/indicadores/view';
import Agenda from '../components/agenda/view';

export default ()=> (
  
    <HashRouter>
           <div>
           
            <NavBar/>
                <Parallax imageSrc="images/paralax.jpg"  alt/>
                    <div className="section white">
                    <Route exact path='/' component={Home} />
                    <Route exact path='/indicadores' component={Indicadores} />
                    <Route exact path='/agenda' component={Agenda} />
                    </div>
                <Parallax imageSrc="images/paralax2.jpg" alt />
            <FooterPage />
            
           
        </div>
       </HashRouter>
   
    );
 


//export default ()=> (<Routes />);
