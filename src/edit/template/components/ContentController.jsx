import React, { PropTypes } from 'react';
import Tabs from 'antd/lib/tabs';

const TabPane = Tabs.TabPane;

export default class ContentController extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: 'edit-controls',
  };

  render() {
    return (
      <div className={this.props.className}>
        <Tabs>
          <TabPane tab="Tab 1" key="1">Content of Tab 1</TabPane>
          <TabPane tab="Tab 2" key="2">Content of Tab 2</TabPane>
          <TabPane tab="Tab 3" key="3">Content of Tab 3</TabPane>
        </Tabs>
      </div>
    );
  }
}
