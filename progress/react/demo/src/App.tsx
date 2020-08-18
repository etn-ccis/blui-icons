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
              <Heart percent={54} size={36}  color="#f0cb2f"/>
        </div>

        <br />
          Center
          <div>
              24px
              <Battery percent={10} size={24} color="#983fef" showPercentLabel={true}/>
                <Pie percent={10} size={24} color="#da7777" showPercentLabel={true} />
                <Ups percent={10} size={24} color="#0088f2" showPercentLabel={true}/>
                <Heart percent={54} size={24}  color="#f0cb2f" showPercentLabel={true}/>
        </div>
          <div>
              36px
              <Battery percent={10} size={36} color="#983fef" showPercentLabel={true}/>
              <Pie percent={10} size={36} color="#da7777" showPercentLabel={true} />
              <Ups percent={10} size={36} color="#0088f2" showPercentLabel={true}/>
              <Heart percent={54} size={36}  color="#f0cb2f" showPercentLabel={true}/>
          </div>
          <div>
              48px
              <Battery percent={10} size={48} color="#983fef" showPercentLabel={true}/>
              <Pie percent={10} size={48} color="#da7777" showPercentLabel={true} />
              <Ups percent={10} size={48} color="#0088f2" showPercentLabel={true}/>
              <Heart percent={54} size={48}  color="#f0cb2f" showPercentLabel={true}/>
          </div>
        </>
  );
}

export default App;
