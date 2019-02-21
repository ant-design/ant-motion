/**
 * Created by jljsj on 16/8/18.
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';

export default [
  { name: <FormattedMessage id="app.header.menu.exhibition" />, href: '/exhibition/', key: 'exhibition' },
  { name: <FormattedMessage id="app.header.menu.language" />, href: '/language/basic', key: 'language' },
  { name: <FormattedMessage id="app.header.menu.components" />, href: '/components/tween-one', key: 'components' },
  { name: 'API', href: '/api/tween-one', key: 'api' },
  {
    name: <FormattedMessage id="app.header.menu.templates" />,
    href: 'https://landing.ant.design',
    key: 'template',
    open: true,
  },
];
