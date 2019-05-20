import React, {Component} from 'react';
let count = 0;


const basePath = 'M20,10V8.3C20,7.6,19.4,7,18.7,7H3.3C2.6,7,2,7.6,2,8.3v7.3C2,16.4,2.6,17,3.3,17h15.3c0.7,0,1.3-0.6,1.3-1.3V14h2v-4H20z';
const chargePath = 'M20,10V8.33a1.319,1.319,0,0,0-1-1.263A1.257,1.257,0,0,0,18.67,7H3.34A1.338,1.338,0,0,0,2,8.33v7.33A1.338,1.338,0,0,0,3.33,17H18.67a1.257,1.257,0,0,0,.33-.067,1.319,1.319,0,0,0,1-1.263V14h2V10Zm-8.5,3v2L4,11H9.5V9L17,13Z';
const singletonePath = 'M18,9v6H4V9H18m.7-2H3.3A1.324,1.324,0,0,0,2,8.3v7.3A1.347,1.347,0,0,0,3.3,17H18.6a1.324,1.324,0,0,0,1.3-1.3V14h2V10H20V8.3A1.324,1.324,0,0,0,18.7,7Z';
const baseID = 'pxb-battery-clip';
const chargeID = 'pxb-battery-clip-charge';
let holeID = 'hole' + count;
let testID = 'test' + count;


const getBasepath = (outlined) => {
 
  return outlined ? singletonePath : basePath;
}
const getClipPath = (charging) => {
  console.log('path', charging);
  return charging ? chargePath : basePath;
}

const getID = (charging) => {
  console.log('id', charging);
  return charging ? chargeID : baseID;
}


export class Battery extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.holeID = 'hole' + count++;
        this.testID = 'test' + count++;
    }

    render() {
        return (
              <svg height={`${this.props.size}px`} width={`${this.props.size}px`} x="0px" y="0px" viewBox="0 0 24 24" {...this.props}>
              <defs>
                <mask id= {this.holeID}>
                  <rect width="100%" height="100%" fill="white" />
                  <polygon fill="black" points="11.5,13 11.5,15 4,11 9.5,11 9.5,9 17,13 " />
                </mask>
                <mask id={this.testID}>
                  <rect width="100%" height="100%" fill="white" />
                  <rect x="2" y="7" fill="black" width={`${Math.min(this.props.percent * 18 / 100, 18)}`} height="10" />
                </mask>
              </defs>
              <path fill={this.props.color || "currentColor"} fillOpacity={(this.props.outlined || this.props.percent >= 100) ? "1" : 0.3} clipPath={`url(#${getID(this.props.charging)})`} d={getBasepath(this.props.outlined)} />
              <clipPath id={getID(this.props.charging)} >
                <path overflow="visible" d={getClipPath(this.props.charging)} />
              </clipPath>
              {this.props.percent > 0 && 
                <g fill={this.props.color || "currentColor"} >
                  <rect x="2" y="7" clipPath={`url(#${getID(this.props.charging)})`} width={`${Math.min(this.props.percent * 18 / 100, 18)}`} height="10" mask={(this.props.outlined && this.props.charging) ? "url(#"+ this.holeID +")" : null} />
                  {this.props.outlined && this.props.charging && <polygon points="11.5,13 11.5,15 4,11 9.5,11 9.5,9 17,13" mask={"url(#"+ this.testID +")"} />}
                </g>
              }

            </svg>
        );
    }
}

// export default Battery;