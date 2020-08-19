import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Battery, Ups, Pie, Heart } from '@pxblue/react-progress-icons';

function App() {
  return (
      <>
        <div>
              <Battery percent={10} size={36} color="#983fef"/>
              <Pie percent={10} size={36} color="#da7777" />
              <Ups percent={10} size={36} color="#0088f2"/>
              <Heart percent={54} size={36} color="#f0cb2f"/>
        </div>

          <br />
             <br />
          Center
          <br />
          <div>
              24px
              <br />
              <Battery percent={10} size={24} color="#983fef" showPercentLabel={true}/>
                <Pie percent={10} size={24} color="#da7777" showPercentLabel={true} />
                <Ups percent={10} size={24} color="#0088f2" showPercentLabel={true}/>
                <Heart percent={54} size={24} color="#f0cb2f" showPercentLabel={true}/>
        </div>
          <div>
              36px
              <br />
              <Battery percent={10} size={36} color="#983fef" showPercentLabel={true}/>
              <Pie percent={10} size={36} color="#da7777" showPercentLabel={true} />
              <Ups percent={10} size={36} color="#0088f2" showPercentLabel={true}/>
              <Heart percent={54} size={36} color="#f0cb2f" showPercentLabel={true}/>
          </div>
          <div>
              48px
              <br />
              <Battery percent={10} size={48} color="#983fef" showPercentLabel={true} labelColor={'blue'}/>
              <Pie percent={10} size={48} color="#da7777" showPercentLabel={true} labelColor={'red'} />
              <Ups percent={10} size={48} color="#0088f2" showPercentLabel={true} labelColor={'yellow'}/>
              <Heart percent={54} size={48} color="#f0cb2f" showPercentLabel={true} labelColor={'black'}/>
          </div>

          <br />
          <br />
          Left
          <div>
              24px
              <br />
              <Battery percent={10} size={24} color="#983fef" showPercentLabel={true} labelPosition={'left'}/>
              <Pie percent={10} size={24} color="#da7777" showPercentLabel={true} labelPosition={'left'}/>
              <Ups percent={10} size={24} color="#0088f2" showPercentLabel={true} labelPosition={'left'}/>
              <Heart percent={54} size={24} color="#f0cb2f" showPercentLabel={true} labelPosition={'left'}/>
          </div>
          <div>
              36px
              <br />
              <Battery percent={10} size={36} color="#983fef" showPercentLabel={true} labelPosition={'left'}/>
              <Pie percent={10} size={36} color="#da7777" showPercentLabel={true} labelPosition={'left'}/>
              <Ups percent={10} size={36} color="#0088f2" showPercentLabel={true} labelPosition={'left'}/>
              <Heart percent={54} size={36} color="#f0cb2f" showPercentLabel={true} labelPosition={'left'}/>
          </div>
          <div>
              48px
              <br />
              <Battery percent={10} size={48} color="#983fef" showPercentLabel={true} labelPosition={'left'}/>
              <Pie percent={10} size={48} color="#da7777" showPercentLabel={true}  labelPosition={'left'}/>
              <Ups percent={10} size={48} color="#0088f2" showPercentLabel={true} labelPosition={'left'}/>
              <Heart percent={54} size={48}  color="#f0cb2f" showPercentLabel={true} labelPosition={'left'}/>
          </div>


          <br />
          <br />
          Right
          <div>
              24px
              <br />
              <Battery percent={10} size={24} color="#983fef" showPercentLabel={true} labelPosition={'right'}/>
              <Pie percent={10} size={24} color="#da7777" showPercentLabel={true} labelPosition={'right'}/>
              <Ups percent={10} size={24} color="#0088f2" showPercentLabel={true} labelPosition={'right'}/>
              <Heart percent={54} size={24} color="#f0cb2f" showPercentLabel={true} labelPosition={'right'}/>
          </div>
          <div>
              36px
              <br />
              <Battery percent={10} size={36} color="#983fef" showPercentLabel={true} labelPosition={'right'}/>
              <Pie percent={10} size={36} color="#da7777" showPercentLabel={true} labelPosition={'right'}/>
              <Ups percent={10} size={36} color="#0088f2" showPercentLabel={true} labelPosition={'right'}/>
              <Heart percent={54} size={36} color="#f0cb2f" showPercentLabel={true} labelPosition={'right'}/>
          </div>
          <div>
              48px
              <br />
              <Battery percent={10} size={48} color="#983fef" showPercentLabel={true} labelPosition={'right'}/>
              <Pie percent={10} size={48} color="#da7777" showPercentLabel={true} labelPosition={'right'} />
              <Ups percent={10} size={48} color="#0088f2" showPercentLabel={true} labelPosition={'right'}/>
              <Heart percent={54} size={48} color="#f0cb2f" showPercentLabel={true} labelPosition={'right'}/>
          </div>


          <br />
          <br />
          Top
          <div>
              24px
              <br />
              <Battery percent={10} size={24} color="#983fef" showPercentLabel={true} labelPosition={'top'}/>
              <Pie percent={10} size={24} color="#da7777" showPercentLabel={true} labelPosition={'top'} />
              <Ups percent={10} size={24} color="#0088f2" showPercentLabel={true} labelPosition={'top'}/>
              <Heart percent={54} size={24} color="#f0cb2f" showPercentLabel={true} labelPosition={'top'}/>
          </div>
          <div>
              36px
              <br />
              <Battery percent={10} size={36} color="#983fef" showPercentLabel={true} labelPosition={'top'}/>
              <Pie percent={10} size={36} color="#da7777" showPercentLabel={true} labelPosition={'top'} />
              <Ups percent={10} size={36} color="#0088f2" showPercentLabel={true} labelPosition={'top'}/>
              <Heart percent={54} size={36} color="#f0cb2f" showPercentLabel={true} labelPosition={'top'}/>
          </div>
          <div>
              48px
              <br />
              <Battery percent={10} size={48} color="#983fef" showPercentLabel={true} labelPosition={'top'}/>
              <Pie percent={10} size={48} color="#da7777" showPercentLabel={true} labelPosition={'top'} />
              <Ups percent={10} size={48} color="#0088f2" showPercentLabel={true} labelPosition={'top'}/>
              <Heart percent={54} size={48} color="#f0cb2f" showPercentLabel={true} labelPosition={'top'}/>
          </div>


          <br />
          <br />
          Bottom
          <div>
              24px
              <br />
              <Battery percent={10} size={24} color="#983fef" showPercentLabel={true} labelPosition={'bottom'}/>
              <Pie percent={10} size={24} color="#da7777" showPercentLabel={true} labelPosition={'bottom'}/>
              <Ups percent={10} size={24} color="#0088f2" showPercentLabel={true} labelPosition={'bottom'}/>
              <Heart percent={54} size={24} color="#f0cb2f" showPercentLabel={true} labelPosition={'bottom'}/>
          </div>
          <div>
              36px
              <br />
              <Battery percent={10} size={36} color="#983fef" showPercentLabel={true} labelPosition={'bottom'}/>
              <Pie percent={10} size={36} color="#da7777" showPercentLabel={true} labelPosition={'bottom'}/>
              <Ups percent={10} size={36} color="#0088f2" showPercentLabel={true} labelPosition={'bottom'}/>
              <Heart percent={54} size={36} color="#f0cb2f" showPercentLabel={true} labelPosition={'bottom'}/>
          </div>
          <div>
              48px
              <br />
              <Battery percent={10} size={48} color="#983fef" showPercentLabel={true}  labelPosition={'bottom'}/>
              <Pie percent={10} size={48} color="#da7777" showPercentLabel={true} labelPosition={'bottom'}/>
              <Ups percent={10} size={48} color="#0088f2" showPercentLabel={true}  labelPosition={'bottom'}/>
              <Heart percent={54} size={48} color="#f0cb2f" showPercentLabel={true} labelPosition={'bottom'}/>
          </div>
        </>
  );
}

export default App;
