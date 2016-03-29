import React, { PropTypes } from 'react';
import './index.less';
import {Input, InputNumber, Select} from 'antd';
const Option = Select.Option;
import OverLay from './OverLay';
import Mask from './Mask';
import $ from 'jquery';

import animType from '../common/animType';

const motionTool = (config) => (ComposedComponent) => {

  return class Wrapper extends React.Component {

    constructor() {
      super();
      // map config to state
      this.state = {
        currentId: '',
        overlay: {
          height: 0,
          width: 0,
          left: 0,
          top: 0,
        },
        showMask: false,
        config,
      };
      const self = this;
      // bind hover event
      // http://stackoverflow.com/questions/10618001/javascript-mouseover-mouseout-issue-with-child-element
      document.addEventListener("mouseover", (e) => {
        // 判断 dom id
        let $target = $(e.target);
        let $parentWrapper = $target.parents('.root');
        let $overlayTarget;
        // console.log("$parentWrapper", $parentWrapper);
        if ($target.hasClass('root') || $parentWrapper.length > 0) {
          if ($target.hasClass('root')) {
            $overlayTarget = $target;
          } else if ($parentWrapper) {
            $overlayTarget = $parentWrapper;
          }

          if ($overlayTarget.length > 0) {
            const overlayOffset = $overlayTarget.offset();

            self.setState({
              currentId: $overlayTarget.attr('id'),
              overlay: {
                top: overlayOffset.top,
                left: overlayOffset.left,
                height: $overlayTarget.height(),
                width: $overlayTarget.width(),
              }
            });
          }

        } else {
          // reset overlay
          // self.setState({
          //   overlay: {
          //     top: 0,
          //     left: 0,
          //     height: 0,
          //     width: 0,
          //   }
          // });
        }

      }, false);

      [
        'panelHandleChange',
        'removeScroll'
      ].forEach((method) => this[method] = this[method].bind(this));
    }

    changeValue(componentName, key, event) {
      console.log("key, event", key, event.target.value);
    }

    removeScroll(e) {
      e.preventDefault();
    }

    handleClick() {
      // 禁止滚动;
      if (this.state.showMask) {
        window.removeEventListener('wheel', this.removeScroll)
      } else {
        window.addEventListener('wheel', this.removeScroll);
      }
      this.setState({
        showMask: !this.state.showMask,
      });
    }

    panelHandleChange(value) {
      console.log(value)
    }

    render() {
      let convertedState = { ...this.state.config };
      // convert config
      for (let key in this.state.config) {
        let componentState = { ...this.state.config[key] } || {};
        const {dataSource, variables} = componentState;
        if (dataSource && dataSource.length > 0) {
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
          componentState.variables = res;
        }
        convertedState[key] = componentState;
      }

      // default checked Header
      let comp = this.state.config['Header'];
      const animContent = comp.variables.map((data, i) => {
        const child = Object.keys(animType).map(key => {
          return (<Option value={key} key={key}>{key}</Option>);
        });
        const inputOrSelect = data.key === 'type' ?
          (<Select defaultValue={data.value} getPopupContainer={()=>{
            return document.getElementById('V-Panel');
          }}
            onChange={this.panelHandleChange}
          >
            {child}
          </Select>) :
          <Input type="text" value={data.value} onChange={this.changeValue.bind(this, 'Header', data.key)} />;
        const animContentChild = typeof data.value === 'number' ?
          <InputNumber min={1} max={10} defaultValue={data.value}
            onChange={this.changeValue.bind(this, 'Header', data.key)} /> :
          inputOrSelect;
        return (
          <li key={i}>
            {data.name}
            {animContentChild}
          </li>);
      });

      return (
        <div style={{'display': 'inline'}}>
          <OverLay {...this.state.overlay} onClick={::this.handleClick} />
          <div className="tool-data-panel">
            <h3>data</h3>
            <ul>
              {comp.dataSource.map((data, i) => {
                return <li key={i}>
                  {data.name}
                  <Input type="text" value={data.value} onChange={this.changeValue.bind(this, 'Header', data.key)} />
                </li>
                })}
            </ul>
          </div>
          <div className="tool-variable-panel" id="V-Panel">
            <h3>variable</h3>
            {animContent}
          </div>
          <ComposedComponent {...convertedState} />
          {this.state.showMask ? <Mask /> : ""}
        </div>);
    }

  };
};

export default motionTool;
