import React, { PropTypes } from 'react';
import { Tabs, Tooltip } from 'antd';
import ListView from './ListView';
import EditView from './EditView';
import OtherView from './OtherView';
// import templateData from '../../../templates/template.config';
import templateListData from '../template.config';

const TabPane = Tabs.TabPane;

const imgUrl = [
  'https://zos.alipayobjects.com/rmsportal/vFPkddGPgtdjOyzZycNFDrboUXEewjIi.svg',
  'https://zos.alipayobjects.com/rmsportal/AUpBGeisGjnGCWANtOLyUaAergfRVyKG.svg',
  'https://zos.alipayobjects.com/rmsportal/nqeLeYhDoUdDcWSJOlPrxONyFZMsQYgJ.svg',
];
export default class ContentController extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    setUrlData: PropTypes.func,
    currentKey: PropTypes.string,
    editId: PropTypes.string,
    onChangeTabs: PropTypes.func,
    urlData: PropTypes.object,
  };

  static defaultProps = {
    className: 'edit-controls',
    onChangeTabs: () => {
    },
  };


  render() {
    return (
      <div className={this.props.className}>
        <Tabs activeKey={this.props.currentKey} onChange={this.props.onChangeTabs}>
          <TabPane tab={<Tooltip title="选择"><i><img src={imgUrl[0]} /></i></Tooltip>} key="1">
            <ListView
              listData={templateListData}
              setUrlData={this.props.setUrlData}
              urlData={this.props.urlData}
            />
          </TabPane>
          <TabPane tab={<Tooltip title="编辑"><i><img src={imgUrl[1]} /></i></Tooltip>} key="2">
            <EditView
              editId={this.props.editId}
              urlData={this.props.urlData}
              setUrlData={this.props.setUrlData}
            />
          </TabPane>
          <TabPane tab={<Tooltip title="功能"><i><img src={imgUrl[2]} /></i></Tooltip>} key="3">
            <OtherView
              setUrlData={this.props.setUrlData}
              urlData={this.props.urlData}
            />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
