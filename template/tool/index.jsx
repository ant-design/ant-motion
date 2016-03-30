import React, { PropTypes } from 'react';
import './index.less';
import {Input, InputNumber, Select, Button } from 'antd';
const Option = Select.Option;
import OverLay from './OverLay';
import Mask from './Mask';
import $ from 'jquery';

import animType from '../common/animType';

import assign from 'object-assign';
import Animate from 'rc-animate';

const motionTool = (config) => (ComposedComponent) => {

  return class Wrapper extends React.Component {

    constructor() {
      super();
      // map config to state
      this.state = {
        currentId: '',
        overlay: {
          height: 0,
          width: $(document).width(),
          left: 0,
          top: 0,
        },
        showMask: false,
        config,
        maskChild: null,
        childId: null,
      };
      this.config = {};

      [
        'panelHandleChange',
        'removeScroll',
        'panelMake',
        'handleClick',
        'convertConfig',
        'getToolChild',
      ].forEach((method) => this[method] = this[method].bind(this));
    }

    componentDidMount() {
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

          if ($overlayTarget.length > 0 && !this.state.showMask) {
            const overlayOffset = $overlayTarget.offset();
            this.setState({
              currentId: $overlayTarget.attr('id'),
              overlay: {
                top: overlayOffset.top,
                left: overlayOffset.left,
                height: $overlayTarget.height(),
                width: $overlayTarget.width(),
              }
            });
          }
        }
        const dom = $target.attr('class') && $target.attr('class').indexOf('root') >= 0 ? $target : $parentWrapper;
        if (dom.attr('class') && dom.attr('class').indexOf('root') >= 0) {
          this.parentWrapper = dom;
          dom.unbind('click', this.handleClick);
          dom.bind('click', this.handleClick);
        }
      }, false);
    }

    changeValue(componentName, key, value) {
      this.config[key] = value;
    }

    removeScroll(e) {
      e.preventDefault();
    }

    getMaskChild(parent, docHeight) {
      let maskChild;
      if (parent.offset().top) {
        maskChild = [
          <div key="1" style={{
                height: parent.offset().top,
                top: 0,
                left: 0,
              }}
            visible
          />,
          <div key="2" style={{
                height: docHeight - parent.offset().top - parent.height(),
                top: parent.offset().top + parent.height(),
              }}
            visible
          />,
        ]
      } else {
        maskChild = (<div style={{ height: docHeight - parent.height(), top: parent.height() }} visible />);
      }
      return maskChild;
    }

    handleClick(e) {
      // 禁止滚动;
      if (this.state.showMask) {
        $('html').attr('style', '');
        //window.removeEventListener('wheel', this.removeScroll)
      } else {
        //window.addEventListener('wheel', this.removeScroll);
        $('html').css({ overflow: 'hidden' });
      }
      const docHeight = $(document).height();
      const showMask = !this.state.showMask;
      let childId = showMask ? this.parentWrapper.attr('id') : null;
      let maskChild = showMask ? this.getMaskChild(this.parentWrapper, docHeight) : null;
      this.setState({
        showMask,
        maskChild,
        maskHeight: docHeight,
        childId,
      });
    }

    panelHandleChange(value) {
      this.config.type = value;
      console.log(value)
    }

    panelMake() {
      // Header 怎么获取....
      // const config = assign({}, this.state.config, this.config);
      // console.log(this.config, config)
      // this.setState({ config });
    }

    convertConfig(data) {
      const convertedState = data;
      for (let key in this.state.config) {
        let componentState = typeof this.state.config[key] === 'string' ? this.state.config[key] : { ...this.state.config[key] } || {};
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
      return convertedState;
    }

    getToolChild(comp) {
      const dataSource = comp.dataSource ? comp.dataSource : [];
      const textContent = dataSource.map((data, i) => {
        const type = data.value.length >= 50 ? 'textarea' : 'text';
        return <li key={i}>
          {data.name}
          <Input type={type} placeholder={data.value} onChange={this.changeValue.bind(this, 'Header', data.key)} />
        </li>
      });
      const variables = comp.variables ? comp.variables : [];

      const animContent = variables.map((data, i) => {
        const textType = data.value >= 50 ? 'textarea' : 'text';
        let animOptionChild;
        if (data.key === 'type') {
          animOptionChild = Object.keys(animType).map(key => {
            return (data.donType || []).indexOf(key) >= 0 ? null : (
              <Option value={key} key={key}>{animType[key].name}</Option>);
          }).filter(c => c);
        }
        const inputOrSelect = data.key === 'type' ?
          (<Select defaultValue={data.value} getPopupContainer={()=>{
            return document.getElementById('V-Panel');
          }}
            onChange={this.panelHandleChange}
          >
            {animOptionChild}
          </Select>) :
          <Input type={textType} placeholder={data.value}
            onChange={this.changeValue.bind(this, this.state.childId, data.key)} />;
        const animContentChild = typeof data.value === 'number' ?
          <InputNumber min={100} step={100} defaultValue={data.value}
            onChange={this.changeValue.bind(this, this.state.childId, data.key)} /> :
          inputOrSelect;
        return (
          <li key={i}>
            {data.name}
            {animContentChild}
          </li>);
      });

      return this.state.childId ? [
        <div className="tool-data-panel" visible key="data">
          <h3>文案编辑</h3>
          <ul>
            {textContent}
          </ul>
        </div>,
        <div className="tool-variable-panel" id="V-Panel" visible key="variable">
          <h3>动画编辑</h3>
          {animContent}
          <Button type="primary" onClick={this.panelMake}>生成</Button>
        </div>
      ] : null;
    }

    render() {
      console.log(this.convertConfig(assign({}, this.state.config)))
      const toolContent = this.getToolChild(this.state.config[this.state.childId] || {});
      return (
        <div style={{'display': 'inline'}}>
          <Animate showProp="visible" transitionName="fade">
            {!this.state.showMask ? <OverLay {...this.state.overlay} visible /> : null}
          </Animate>
          <Animate showProp="visible" transitionName="zoom">
            {toolContent}
          </Animate>
          <ComposedComponent {...this.convertConfig(assign({}, this.state.config))} />
          <Animate component={Mask} showProp="visible" transitionName="fade"
            style={{ height: this.state.maskHeight }}>{this.state.showMask ? this.state.maskChild : null}
          </Animate>
        </div>);
    }

  };
};

export default motionTool;
