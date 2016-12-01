import React, { PropTypes } from 'react';
import Icon from 'antd/lib/icon';
import Modal from 'antd/lib/modal';
import Checkbox from 'antd/lib/checkbox';
import InputNumber from 'antd/lib/input-number';
import { TweenOneGroup } from 'rc-tween-one';
import ListSort from './ListSort';
import webData from './../template.config';

export default class ListView extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    listData: PropTypes.object,
    setUrlData: PropTypes.func,
    urlData: PropTypes.object,
  };

  static defaultProps = {
    className: 'list-view',
    setUrlData: () => {
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      data: [].concat(this.props.urlData.t).filter(item => item), // 记录 list 里的数据;
      templateOptData: [].concat(this.props.urlData.t).filter(item => item), // 记录弹出框后的编辑数据;
      modalOpen: false,
      tweenEnd: true,
    };
  }

  onModalOk = () => {
    this.props.setUrlData({ t: this.state.templateOptData });
    const tweenEnd = this.state.data.join('') === this.state.templateOptData.join('');
    this.setState({
      data: this.state.templateOptData,
      modalOpen: false,
      tweenEnd,
    });
  };

  onModalCancel = () => {
    this.setState({
      templateOptData: this.state.data,
      modalOpen: false,
      tweenEnd: true,
    });
  }

  onListSortChange = (children) => {
    const data = children.map(item => item.key);
    this.props.setUrlData({ t: data }, true);
    this.setState({
      data,
      templateOptData: data,
    });
  }

  onChange = (key, i, checkbox, value) => {
    let data = this.state.templateOptData;
    let name;
    if (!checkbox) {
      name = `${key}_${i}`;
      const checked = value.target.checked;
      let beArray = false;
      data = data.map((item) => {
        if (!checked && item === name) {
          beArray = true;
          return false;
        } else if (checked && item.match(key)) {
          beArray = true;
          return name;
        }
        return item;
      }).filter(item => item);
      if (!beArray) {
        if (key === 'nav') {
          data.unshift(name);
        } else {
          data.push(name);
        }
      }
    } else {
      const length = data.filter(item => item.match(`${key}_${i}`)).length;
      const endIsFooter = data.length && data[data.length - 1].match('footer');
      if (length !== value) {
        const newData = [];
        for (let j = 0; j < value; j += 1) {
          newData.push(`${key}_${i}_${j}`);
        }
        data = data.map((item) => {
          if (newData.indexOf(item) >= 0) {
            newData.splice(newData.indexOf(item), 1);
          } else if (item.match(`${key}_${i}`)) {
            return null;
          }
          return item;
        }).filter(item => item);
        newData.forEach((item) => {
          if (endIsFooter) {
            data.splice(data.length - 1, 0, item);
          } else {
            data.push(item);
          }
        });
      }
    }
    this.setState({ templateOptData: data });
  }

  getModalChildren = () => Object.keys(webData).map((key) => {
    const item = webData[key];
    if (key === 'other') {
      return null;
    }
    const imgChildren = item.data.map((cItem, i) => {
      const onChange = this.onChange.bind(this, key, i, item.checkbox);
      const value = this.state.templateOptData.filter(aItem => aItem.match(`${key}_${i}`)).length;
      return (<li key={i} disabled={cItem.disabled}>
        {cItem.disabled && <span className="disabled-test"><p>敬请期待</p></span>}
        <div className="img-wrapper"><img src={cItem.src} width="100%" /></div>
        <div className="text-wrapper">{cItem.text}</div>
        <div className="select-wrapper">
          {item.checkbox ?
            (<InputNumber size="small" min={0} onChange={onChange} defaultValue={value} />)
            : (<Checkbox onChange={onChange} checked={!!value} />)}
        </div>
      </li>);
    });
    return (<div key={key} className={`${this.props.className}-modal`}>
      <h2>
        {item.name}
        {item.remark && (<p><Icon type="exclamation-circle-o" />{item.remark}</p>)}
      </h2>
      <div className={`${this.props.className}-img-wrapper`}>
        <ul>
          {imgChildren}
        </ul>
      </div>
    </div>);
  });

  getChildrenToTag = (children) => {
    if (this.state.tweenEnd && !this.state.oneRemove) {
      return (<ListSort
        component="ul"
        dragClassName={`${this.props.className}-drag-selected`}
        onChange={this.onListSortChange}
      >
        {children}
      </ListSort>);
    }
    return (<TweenOneGroup
      component="ul"
      enter={{
        height: 0,
        opacity: 0,
        type: 'from',
        paddingTop: 0,
        paddingBottom: 0,
        marginBottom: 0,
      }}
      leave={{ height: 0, opacity: 0, paddingTop: 0, paddingBottom: 0, marginBottom: 0 }}
      appear={false}
      onEnd={this.tweenOneEnd}
    >
      {children}
    </TweenOneGroup>);
  }

  tweenOneEnd = () => {
    this.setState({
      tweenEnd: true,
    });
  }

  removeOneClick = (key) => {
    const data = this.state.data;
    data.splice(data.indexOf(key), 1);
    this.props.setUrlData({ t: data }, true);
    this.setState({
      data,
      templateOptData: data,
    });
  }

  addClick = () => {
    this.setState({ modalOpen: true, tweenEnd: false, oneRemove: false });
  };

  remClick = () => {
    this.setState({ tweenEnd: true, oneRemove: !this.state.oneRemove });
  };

  render() {
    const listData = this.props.listData;
    const children = this.state.data.filter(item => item).map((key) => {
      const keys = key.split('_');
      const data = listData[keys[0]].data[keys[1]];
      return (<li key={key} className={this.state.oneRemove && 'close-wrapper'}>
        <TweenOneGroup
          className="close"
          enter={{ scale: 1.5, opacity: 0, type: 'from' }}
          leave={{ scale: 0, opacity: 0 }}
        >
          {this.state.oneRemove && <span
            key="close"
            onClick={() => { this.removeOneClick(key); }}
          >
            <Icon type="close" />
          </span>}
        </TweenOneGroup>
        <div><img src={data.src} width="100%" /></div>
        <div>{data.text}</div>
      </li>);
    });
    const childrenToRender = this.getChildrenToTag(children);
    const modalChildren = this.getModalChildren();
    return (<div className={this.props.className}>
      {children.length ? childrenToRender : <span>请添加你的模块</span>}
      <div className="handle">
        <div onClick={this.addClick}><Icon type="plus" /></div>
        <TweenOneGroup
          onClick={this.remClick}
          enter={{ scale: 1.5, opacity: 0, type: 'from' }}
          leave={{ scale: 0, opacity: 0 }}
          appear={false}
        >
          {this.state.oneRemove ? <Icon type="close" key="close" /> :
            (<Icon type="minus" key="minus" />)}
        </TweenOneGroup>
        <Modal
          visible={this.state.modalOpen}
          title={<h2>请选择模板</h2>}
          width="82%"
          onOk={this.onModalOk}
          onCancel={this.onModalCancel}
        >
          {modalChildren}
        </Modal>
      </div>
    </div>);
  }
}
