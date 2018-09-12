import React,{Component} from 'react';
import {Tabs,Tab} from 'react-materialize';

import TabGgno from './TabGgno';


class Noticias extends Component{
    constructor(){
        super();
       
    }
    
    render(){

        
        
        return (<div>
                    <Tabs className="tab-demo z-depth-1">
                        <Tab title="LOREM" active><TabGgno url={'http://10.17.12.218/ggnomotor/modules/noticias/services/unidades.php?unidade=1'}/></Tab>
                        <Tab title="IPSUM"><TabGgno url={'http://10.17.12.218/ggnomotor/modules/noticias/services/unidades.php?unidade=2'}/></Tab>
                        <Tab title="FINIBUS"><TabGgno url={'http://10.17.12.218/ggnomotor/modules/noticias/services/unidades.php?unidade=3'}/></Tab>
                        <Tab title="ACCUSAMUS"><TabGgno url={'http://10.17.12.218/ggnomotor/modules/noticias/services/unidades.php?unidade=4'}/></Tab>
                        <Tab title="RACCKA"><TabGgno url={'http://10.17.12.218/ggnomotor/modules/noticias/services/unidades.php?unidade=5'}/></Tab>
                    </Tabs>
                </div>
            );
    }
}
export default Noticias;