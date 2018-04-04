import * as React from 'react';
import { connect } from 'react-redux';

import Layout from 'antd/es/layout';
import Menu from 'antd/es/menu';
// import Tooltip from 'antd/es/tooltip';
import Dropdown from 'antd/es/dropdown';
import Icon from 'antd/es/icon';

import NoticeIcon from 'ant-design-pro/es/NoticeIcon';

import { RootState } from '../../redux/reducers';

import cls from '../../Layouts/DashboardLayout/layout.less';

class GlobalHeader extends React.Component<{
  inUserEntry: boolean;
  loggedIn: boolean;
  handleLogout: () => void;
}> {
  render() {
    // const minWidth = this.props.mediaQuery === 'phone' ? undefined : '440px';
    return (
      <Layout.Header className={cls.header}>
        {this.props.inUserEntry && this.renderLeftIcon()}
        <Menu mode="horizontal" className={cls['header-menu']}>
          <Menu.Item className={cls['header-menu-link']} key="site_hackday">
            <a href="http://hack.hustunique.com" target="_blank">
              Hackday 官网
            </a>
          </Menu.Item>
          <Menu.Item className={cls['header-menu-link']} key="site_unqiue">
            <a href="http://www.hustunique.com" target="_blank">
              联创团队官网
            </a>
          </Menu.Item>
          {this.props.loggedIn && this.renderUserMenu()}
        </Menu>
      </Layout.Header>
    );
  }

  renderLeftIcon() {
    return <div className={cls['header-left-icon']} />;
  }

  renderUserMenu() {
    const data = [
      // {
      //   id: '000000001',
      //   avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
      //   title: '你收到了 14 份新周报',
      //   datetime: '2017-08-09',
      // },
      {
        id: '000000011',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
        title: '已完成报名',
        description: '亲爱的于有为同学，你已经完成报名，请等待审核。',
      },
      {
        id: '000000012',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
        title: '被拒绝参赛',
        description:
          '亲爱的于有为同学，十分抱歉的通知你：你已经被 UniqueHack 委员会拒绝参赛，欢迎明年继续报名。',
      },
    ];

    const subMenu = (
      <Menu>
        <Menu.Item key="0" style={{ width: '150px' }}>
          <a href="#/apply/detail">
            <Icon type="edit" style={{ marginRight: '4px' }} /> 编辑报名信息
          </a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="2">
          <span onClick={this.props.handleLogout}>
            <Icon type="close" style={{ marginRight: '4px' }} /> 退出登录
          </span>
        </Menu.Item>
      </Menu>
    );

    const menuItems = [
      <Menu.Item className={cls['header-menu-item']} key="msg" style={{ marginRight: '10px' }}>
        <NoticeIcon count={5}>
          <NoticeIcon.Tab list={data} title="未读消息" />
        </NoticeIcon>
      </Menu.Item>,
      <Menu.Item className={cls['header-menu-item']} key="mine">
        <Dropdown overlay={subMenu} trigger={['click']}>
          <span style={{ lineHeight: '50px', display: 'inline-block' }}>
            <Icon type="user" /> 用户名
          </span>
        </Dropdown>
      </Menu.Item>,
    ];
    return menuItems.reverse();
  }
}

export default connect(
  (state: RootState) => {
    return {
      inUserEntry: state.route!.location.pathname.indexOf('/user_entry') === 0,
      loggedIn: state.auth.loggedIn,
    };
  },
  dispatch => ({
    handleLogout() {
      dispatch({ type: 'LOGOUT_CLICKED' });
    },
  }),
)(GlobalHeader);
