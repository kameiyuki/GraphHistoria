import logo from './logo.svg';
import './App.css';
import Headerfunc from './header.js';
import Card from './card.js';
import Graph from './graph.js';
import Introduction from './introduction';
import classNames from 'classnames';
import { useState } from 'react'


function App() {
  //aaaaaaaaaaaaaaaaaaaaaaaakorehatesut
  const initialState1 = {
    odanobunaga:{
      name:"織田信長",
      img:"odanobunaga.jpg",
      event:[
        {
          id:0,
          age:0,
          incident:'生誕',
          happiness:0,
          feeling:"",
          readonly:true
        },
        {
          id:1,
          age:1,
          incident:'',
          happiness:0,
          feeling:"",
          readonly:false
        },
        {
          id:2,
          age:49,
          incident:'本能寺の変で死去',
          happiness:0,
          feeling:"",
          readonly:true
        },
        
      ],
    }
  }
  
  const person="odanobunaga"
  const ImgPath=process.env.PUBLIC_URL+"/"+initialState1[person]["img"]
  const AppCss=classNames("App","full-page","bg-light")
  const [event, setEvent] = useState(initialState1[person]["event"]);
  
  return (
    <div className={AppCss}>
      <Headerfunc />      
      <div className="container-fluid">
        <div className="row">
          <h3>{initialState1[person]["name"]}の人生グラフ</h3>
          <div className='col-lg-6'>
            <Graph Event={event}/>
            <Introduction ImgPath={ImgPath} />

          </div>
          <div className='col-lg-6'><Card Event={event} setEvent={setEvent}/></div>
        </div>
      </div>
    </div>
  );
}

export default App;
