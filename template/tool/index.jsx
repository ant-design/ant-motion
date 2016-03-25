import React, { PropTypes } from 'react';
import './index.less';
import {Input, InputNumber} from 'antd';

const motionTool = (config) => (ComposedComponent) => {

  return class Wrapper extends React.Component {

    constructor() {
      super();
      // map config to state
      this.state = config;
      // bind hover event
      // http://stackoverflow.com/questions/10618001/javascript-mouseover-mouseout-issue-with-child-element
      document.addEventListener("mouseover", (e) => {
        // 判断 dom id
        console.log("e", e.target);
      }, false);
    }

    changeValue(componentName, key, event) {
      console.log("key, event", key, event.target.value);
    }

    render() {
      let convertedState = {...this.state};
      // convert config
      for (let key in this.state) {
        let componentState = {...this.state[key]} || {};
        const {dataSource, variables} = componentState;
        if (dataSource && dataSource.length> 0) {
          let res = {};
          dataSource.forEach(item => {
            res[item.key] = item.value;
          });
          componentState.dataSource = res;
        }
        if (variables && variables.length > 0) {
          let res = {};
          variables.forEach(item => {
            res[item.key] = item.value;
          });
          console.log("componentState", componentState, res);
          componentState.variables = res;
          componentState.variables.left =  { x: -30, opacity: 0, };
          componentState.variables.right =  { x: 30, opacity: 0, };
        }
        convertedState[key] = componentState;
      }

      // default checked Header
      let comp = this.state['Header'];
      return <div style={{'display': 'inline'}}>
        <div className="tool-data-panel">
          <h3>data</h3>
          <ul>
            {comp.dataSource.map(data => {
              return <li>
                {data.name}
                <Input type="text" value={data.value} onChange={this.changeValue.bind(this, 'Header', data.key)}/>
              </li>
            })}
          </ul>
        </div>
        <div className="tool-variable-panel">
          <h3>variable</h3>
          {comp.variables.map(data => {
            return <li>
              {data.name}
                {typeof data.value === 'number' ?
                  <InputNumber min={1} max={10} defaultValue={data.value} onChange={this.changeValue.bind(this, 'Header', data.key)} /> :
                  <Input type="text" value={data.value} onChange={this.changeValue.bind(this, 'Header', data.key)}/>}
            </li>
          })}
        </div>
        <ComposedComponent {...convertedState}/>
      </div>
    }

  };
};

export default motionTool;
