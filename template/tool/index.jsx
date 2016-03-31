import React, { PropTypes } from 'react';
import './index.less';
import { Input, InputNumber, Select, Button } from 'antd';
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
        showMask: false,
        config,
        maskChild: null,
        childId: '',
      };
      this.config = {};

      [
        'setURLConfig',
        'getURLConfig',
        'handleClick',
        'convertConfig',
        'getToolChild',
        'getConfig',
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
        if ($target.hasClass('root') || $parentWrapper.length > 0) {
          if ($target.hasClass('root')) {
            $overlayTarget = $target;
          } else if ($parentWrapper) {
            $overlayTarget = $parentWrapper;
          }
        }
        if ($overlayTarget && $overlayTarget.attr('class') &&
          $overlayTarget.attr('class').indexOf('root') >= 0) {
          this.overlayTarget = $overlayTarget;
          $overlayTarget.unbind('dblclick', this.handleClick);
          $overlayTarget.bind('dblclick', this.handleClick);
        }
      }, false);
    }

    changeValue(key, name, e) {
      const dom = e.target;
      const configChild = this.config[this.state.childId] = this.config[this.state.childId] || {};
      configChild[name] = configChild[name] || {};
      configChild[name][key] = dom.value;
    }

    numberChangeValue(key, name, value) {
      const configChild = this.config[this.state.childId] = this.config[this.state.childId] || {};
      configChild[name] = configChild[name] || {};
      configChild[name][key] = value;
    }

    panelHandleChange(name, value) {
      this.config[this.state.childId] = this.config[this.state.childId] || {};
      this.config[this.state.childId][name] = this.config[this.state.childId][name] || {};
      this.config[this.state.childId][name].type = value;
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
        this.config = {};
      } else {
        $('html').css({ overflow: 'hidden' });
      }
      const docHeight = $(document).height();
      const showMask = !this.state.showMask;
      let childId = showMask ? this.overlayTarget.attr('id') : null;
      let maskChild = showMask ? this.getMaskChild(this.overlayTarget, docHeight) : null;
      this.setState({
        showMask,
        maskChild,
        maskHeight: docHeight,
        childId,
      });
    }


    setURLConfig(name, item) {
      const url = decodeURIComponent(location.hash || '').replace('#', '');
      const config = JSON.parse(url.split('=')[1] || '{}');
      const childIdItem = config[this.state.childId] || {};
      childIdItem[name] = childIdItem[name] || {};
      Object.keys(item).forEach(key => {
        childIdItem[name][key] = item[key];
      });
      config[this.state.childId] = childIdItem;
      const configString = JSON.stringify(config);
      location.hash = `#config=${encodeURIComponent(configString)}`;
    }

    clickMake(name) {
      // Header 怎么获取....
      const config = this.state.config;
      const configChild = this.config[this.state.childId] || {};
      const item = configChild[name];
      if (item) {
        Object.keys(item).forEach(this.getConfig.bind(this, name, item, config, this.state.childId, true));
        this.setURLConfig(name, item);
        this.setState({ config }, ()=> {
          this.config[this.state.childId][name] = {};
        });
      }
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
        // console.log(data.key === 'content');
        const type = data.value.length >= 50 ? 'textarea' : 'text';
        return <li key={i}>
          {data.name}
          <Input type={type} placeholder={data.value} onChange={this.changeValue.bind(this, data.key, 'dataSource')} />
        </li>
      });
      const variables = comp.variables ? comp.variables : [];

      const animContent = variables.map((data, i) => {
        let animOptionChild;
        if (data.key === 'type') {
          animOptionChild = Object.keys(animType).map(key => {
            return (data.donType || []).indexOf(key) >= 0 ? null : (
              <Option value={key} key={key}>{animType[key].name}</Option>);
          }).filter(c => c);
        }
        const animContentChild = data.key === 'type' ?
          (<Select defaultValue={data.value}
            getPopupContainer={() => {
                return document.getElementById('V-Panel');
              }}
            onChange={this.panelHandleChange.bind(this, 'variables')}
          >
            {animOptionChild}
          </Select>) :
          (<InputNumber min={100} step={100} defaultValue={data.value}
            onChange={this.numberChangeValue.bind(this, data.key, 'variables')}
          />);
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
            <Button type="primary" onClick={this.clickMake.bind(this, 'dataSource')}>保存</Button>
          </ul>
        </div>,
        <div className="tool-variable-panel" id="V-Panel" visible key="variable">
          <h3>动画编辑</h3>
          {animContent}
          <Button type="primary" onClick={this.clickMake.bind(this, 'variables')}>保存</Button>
        </div>
      ] : null;
    }

    getConfig(name, item, config, childId, nowBool, childKey) {
      const configChild = config[childId];
      let configForKeyData = configChild[name];
      configForKeyData = configForKeyData.map(childItem => {
        const _item = childItem;
        if (_item.key === childKey) {
          _item.value = item[childKey];
        }
        return _item;
      });
      configChild[name] = configForKeyData;

      if (name === 'variables' && nowBool) {
        configChild.dateNow = Date.now();
      }
      config[childId] = configChild;
    }

    getURLConfig(config) {
      const url = decodeURIComponent(location.hash || '').replace('#', '');
      const urlConfig = JSON.parse(url.split('=')[1] || '{}');
      const _config = config;
      // 大类,如banner
      Object.keys(urlConfig).forEach(key => {
        const item = urlConfig[key];
        // 二级,如variables
        Object.keys(item).forEach(_key => {
          const _item = item[_key];
          // 三级,如delay
          Object.keys(_item).forEach(this.getConfig.bind(this, _key, _item, _config, key, false));
        })
      });
      console.log(_config)
      return _config;
    }

    render() {
      const config = this.getURLConfig(this.state.config);
      const toolContent = this.getToolChild(config[this.state.childId] || {});
      return (
        <div style={{'display': 'inline'}}>
          <OverLay />
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
