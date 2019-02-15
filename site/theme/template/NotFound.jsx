import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

export default function NotFound(props) {
  return (
    <div id="page-404" className={props.className}>
      <section>
        <h1>404</h1>
        <p>
你要找的页面不存在
          <Link to="/">返回首页</Link>
        </p>
      </section>
      <style
        dangerouslySetInnerHTML={{
          __html: '#page-404{ height: calc(100% - 199px);}',
        }}
      />
    </div>
  );
}

NotFound.propTypes = {
  className: PropTypes.string,
};
