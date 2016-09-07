import React from 'react';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import BannerAnim from 'rc-banner-anim';
import Button from 'antd/lib/button';
import ScrollElement from 'rc-scroll-anim/lib/ScrollElement';
import SvgMorphPlugin from 'rc-tween-one/lib/plugin/SvgMorphPlugin';
TweenOne.plugins.push(SvgMorphPlugin);

const Element = BannerAnim.Element;
const BgElement = Element.BgElement;

export default class Banner extends React.Component {
  static contextTypes = {
    className: React.PropTypes.string,
  };

  static defaultProps = {
    className: 'banner',
  };

  render() {
    return (<ScrollElement scrollName="banner" className={`${this.props.className} vh`}>
      <BannerAnim>
        <Element key="a"
          followParallax={{
            delay: 0,
            minMove: 0.1,
            data: [
              { id: 'banner0', value: -10, type: 'x' },
              { id: 'banner1', value: -30, type: 'x' },
              { id: 'banner2', value: 10, type: 'x' },
              { id: 'banner3', value: 5, type: 'x' },
              { id: 'banner4', value: -5, type: 'x' },
              { id: 'banner5', value: -15, type: 'x' },
              { id: 'banner6', value: -20, type: 'x' },
              { id: 'banner7', value: 15, type: 'x' },
              { id: 'banner8', value: 12, type: 'x' },
            ],
          }}
        >
          <BgElement key="bg" className={`${this.props.className}-bg`}>
            <svg className={`${this.props.className}-bg-left`} height="100%" viewBox="0 0 400 800">
              <TweenOne
                attr="attr"
                component="path"
                fill="rgba(255,255,255,.05)"
                stroke="rgba(255,255,255,.1)"
                d="M-30,-30L180,-30C200,60,90,20,20,140S-120,320,-80,150Z"
                animation={[
                  { style: {opacity: 0}, type: 'from'},
                  {
                    d: 'M-30,-30L240,-30C180,-50,120,-50,40,140C10,220,-80,280,-80,150Z',
                    duration: 10000,
                    repeat: -1,
                    yoyo: true,
                    ease: 'easeInOutSine',
                  },
                ]}
              />
              <TweenOne
                attr="attr"
                component="path"
                fill="rgba(255,255,255,.05)"
                stroke="rgba(255,255,255,.1)"
                d="M-30,-30L150,-30C50,20,150,90,30,190S20,190,-80,250Z"
                animation={[
                  { style: {opacity: 0}, delay: 100, type: 'from'},
                  {
                    d: "M-30,-30L180,-30C120,100,70,40,10,160C-80,380,-120,80,-80,100Z",
                    duration: 10000,
                    repeat: -1,
                    yoyo: true,
                    ease: 'easeInOutSine',
                  },
                ]}
              />
              <path
                fill="rgba(100,111,235,.15)"
                stroke="rgba(199,207,255,.09)"
                fillRule="evenodd"
                d="M80,840L200,670L320,840ZM140,810L200,730L260,810Z"
              />
              <g id="banner0">
                <TweenOne
                  component="circle"
                  cx="220" cy="600" r="10"
                  className="annular"
                  style={{
                    strokeDasharray: '50px 20px',
                    strokeDashoffset: -35,
                    transformOrigin: '220px 600px'
                  }}
                  animation={[
                    {
                      opacity: 0, scale: 0, ease: 'easeOutBack',
                      delay: 200, type: 'from',
                    },
                    { rotate: 360, repeat: -1, ease: 'linear', duration: 5000 },
                  ]}
                />
              </g>
              <g id="banner8">
                <TweenOne
                  component="circle"
                  cx="350" cy="150" r="12"
                  className="annular"
                  style={{ strokeDasharray: '25px 10px', transformOrigin: '350px 150px'}}
                  animation={[
                    { opacity: 0, delay: 100, type: 'from' },
                    { rotate: 360, repeat: -1, ease: 'linear', duration: 7000 },
                  ]}
                />
              </g>
            </svg>
            <svg className={`${this.props.className}-bg-right`} height="100%" viewBox="0 0 500 800">
              <path
                fill="rgba(100,111,235,.15)"
                stroke="rgba(199,207,255,.09)"
                fillRule="evenodd"
                d="M0,-30L120,150L240,-30ZM180,0L120,90L60,0Z"
              />
              <TweenOne
                attr="attr"
                component="path"
                fill="rgba(255,255,255,.05)"
                stroke="rgba(255,255,255,.1)"
                d="M0,800C400,680,400,580,450,350C480,200,480,200,500,160L500,800Z"
                animation={{
                  d: 'M0,800C400,680,300,550,420,350C480,260,480,260,500,180L500,800Z',
                  duration: 20000,
                  repeat: -1,
                  yoyo: true,
                  ease: 'easeInOutSine',
                }}
              />
              <TweenOne
                attr="attr"
                component="path"
                fill="rgba(255,255,255,.03)"
                stroke="rgba(255,255,255,.1)"
                d="M100,800C400,700,300,400,500,200L500,800Z"
                animation={{
                  d: 'M100,800C200,750,380,800,500,100L500,800Z',
                  duration: 20000,
                  repeat: -1,
                  yoyo: true,
                  ease: 'easeInOutSine',
                }}
              />
              <circle
                id="banner1"
                fill="rgba(163,199,255,.15)"
                r="80"
                cx="450"
                cy="0"
                style={{ filter: 'url(#Blur)' }}
              />
              <circle
                id="banner2"
                fill="rgba(163,199,255,.15)"
                r="80"
                cx="500"
                cy="80"
                style={{ filter: 'url(#Blur)' }}
              />
              <circle
                id="banner3"
                cx="30"
                cy="80"
                r="6"
                stroke="#fff"
                strokeWidth="2"
                fill="transparent"
              />
              <polygon
                id="banner4"
                stroke="#D5DEFF"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="transparent"
                points="100,550 115,550 103,537"
              />
              <polygon
                id="banner5"
                stroke="#fff"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="transparent"
                points="130,550 132,530 110,530"
                style={{ strokeDasharray: '50px 10px', strokeDashoffset: -30 }}
              />
            </svg>
            <svg className={`${this.props.className}-bg-center`} width="100%" viewBox="0 0 1200 800">
              <defs>
                <filter id="Blur">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
                </filter>
              </defs>
              <g id="banner6">
                <TweenOne
                  component="circle"
                  fill="rgba(161,174,245,.2)"
                  r="130"
                  cx="350"
                  cy="350"
                  style={{ filter: 'url(#Blur)' }}
                  animation={{ y: 20, repeat: -1, duration: 3000, yoyo: true }}
                />
              </g>
              <g id="banner7">
                <TweenOne
                  component="circle"
                  fill="rgba(120,172,254,.15)"
                  r="80"
                  cx="500"
                  cy="420"
                  style={{ filter: 'url(#Blur)' }}
                  animation={{ y: -20, repeat: -1, duration: 3000, yoyo: true }}
                />
              </g>
            </svg>
          </BgElement>
          <QueueAnim key="title" type="bottom" className={`${this.props.className}-title`} delay={500}>
            <h1 key="h1">
              <img src="https://zos.alipayobjects.com/rmsportal/LfgNJtYacFtHYvt.png" width="476" />
            </h1>
            <h2 key="h2">
              <img src="https://zos.alipayobjects.com/rmsportal/XrTFRvqJmTIKCGo.svg" width="248" />
            </h2>
            <p key="p">The react animation solution</p>
            <div key="button">
              <Button type="primary" className={`${this.props.className}-title-button`}>
                <i />
                立即了解
              </Button>
            </div>
          </QueueAnim>
          <TweenOne
            className={`${this.props.className}-mouse`}
            animation={{ opacity: 0, type: 'from', delay: 400 }}
          >
            <TweenOne
              className="mouse-bar"
              animation={{ y: 5, yoyo: true, repeat: -1, duration: 900 }}
            />
          </TweenOne>
          <svg className={`${this.props.className}-mask`} width="100%" viewBox="0 0 600 150">
            <TweenOne
              fill="#FFF"
              d="M0,150 C100,100, 150,115, 300,120 C390,125,500,130,600,80 L600,150 L0,150"
              animation={{
                d: 'M0,140 C120,95, 150,110, 300,125 C390,135,500,135,600,90 L600,150 L0,150Z',
                repeat: -1,
                yoyo: true,
                duration: 10000,
                ease: 'easeInOutSine',
              }}
              attr="attr"
              component="path"
            />
          </svg>
        </Element>
      </BannerAnim>
    </ScrollElement>);
  }
}

