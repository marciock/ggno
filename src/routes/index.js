import React  from 'react';
//import Routes from './routes';
import {Parallax} from 'react-materialize';
import {HashRouter,Route, Link} from 'react-router-dom';
import creatHistory from 'history/createBrowserHistory';
import NavBar from '../components/tools/NavBar';
import FooterPage from '../components/tools/FooterPage';
import Home from './Home';
import Indicadores from '../components/indicadores/view';
import TodosIndicadores from '../components/indicadores/todos';
import Agenda from '../components/agenda/view';
import Reunioes from '../components/reunioes/view';
import TodosDocumentos from '../components/documentos/todos';
import Comites from '../components/comites/index';
import ComitesView from '../components/comites/view';
export default ()=> (
  
    <HashRouter>
           <div>
           
            <NavBar/>
                <Parallax imageSrc="images/paralax.jpg"  alt/>
                    <div className="section white">
                    <Route exact path='/' component={Home} />
                    <Route exact path='/indicadores' component={Indicadores} />
                    <Route exact path='/todosindicadores' component={TodosIndicadores} />
                    <Route exact path='/agenda' component={Agenda} />
                    <Route exact path='/reunioes' component={Reunioes} />
                    <Route exact path='/todosdocumentos' component={TodosDocumentos} />
                    <Route exact path='/comites' component={Comites} />
                    <Route exact path='/comitesview/:id_comite' component={ComitesView} />
                    
                    </div>
                <Parallax imageSrc="images/paralax2.jpg" alt />
            <FooterPage />
            
           
        </div>
       </HashRouter>
   
    );
 


//export default ()=> (<Routes />);
