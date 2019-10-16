import React, {useState} from 'react';
import 'css-doodle';
import * as styles from './styles.scss'
import {Icon} from 'antd';

function DoodleImage() {
  const [force, updateState] = useState(0);
  function forceUpdate() {
    updateState(1);
  }

  if (force === 1) {
    setTimeout(() => {
      updateState(0);
    }, 1)
    return (
      <div className={styles.doodle}>
        <Icon type="loading" style={{color: '#333357'}}/>
      </div>
    );
  }

  return (
    <div className={styles.doodle} onClick={forceUpdate}>
      <css-doodle>{`
       :doodle {
         flex: none;
        @grid: 1x24;
        @size: 80vw 400px;
      }
      --transform: scale(@r(.8, 1.2)) translateX(@r(-200%, 200%)) translateY(@r(-5%, 35%));
      z-index: 2;
      color: @pn(#fff, #8b4480, #f9d51e, #36a47b, #7db13c, #ea695c, #0059b2, #74a9c3);
      transform-origin: 50% 100%;
      transform: var(--transform);

      ::before {
        position: absolute;
        bottom: 240px;
        left: -15px;
        content: "✿";
        font-size: 100px;
        -webkit-text-stroke: 3px;
      }
      ::after {
        position: absolute;
        bottom: 0;
        left: 0;
        content: "(";
        font-size: 150px;
        transform: rotate(60deg) skew(60deg) scale(1.2, 1.8);
      }

      @random {
        ::after {
          content: ")";
          left: 1.7vw;
          bottom: -10px;
        }
      }

      @nth(5, 10, 15, 20, 24) {
        z-index: 1;
        color: #fff;
      }

      @nth(1, 3, 9, 16, 19) {
        ::after {
          bottom: 0;
          left: 0;
          content: "(";
        }

        animation: swingLeft @r(1.5, 3)s ease infinite alternate both;

        ::before {
          animation: beforeLeft @lr()s ease infinite alternate both;
        }
      }

      @nth(5, 7, 15, 18, 23) {
        ::after {
          content: ")";
          left: 1.7vw;
          bottom: -3vmin;
        }
        animation: swing @r(1.5, 3)s ease infinite alternate both;

        ::before {
          animation: before @lr()s ease infinite alternate both;
        }
      }

      @keyframes swingLeft {
        0% {
          transform: var(--transform) rotate(0deg);
        }
        100% {
          transform: var(--transform) rotate(7deg);
        }
      }

      @keyframes beforeLeft {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(7deg);
        }
      }

      @keyframes swing {
        0% {
          transform: var(--transform) rotate(0deg);
        }
        100% {
          transform: var(--transform) rotate(-7deg);
        }
      }

      @keyframes before {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(-7deg);
        }
      }`}
      </css-doodle>
    </div>
  );
}

export default DoodleImage;
