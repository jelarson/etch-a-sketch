import React from 'react'
import { css } from '@emotion/core'

import Navbar from '../navigation/navbar'
import arrow from '../assets/images.png'

const homePageWrapperCss = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`
const homeContentWrapperCss = css`
  width: 100%;
  height: 100%;
  // background-color: green;
  display: flex;
  justify-content: center;
`

const arrowWrapperCss = css`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-bottom: 50px;
`

const arrowBottomRowCss = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const arrowTopRowCss = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const arrowCss = css`
  height: 80px;
  &[direction='up'] {
    transform: rotate(-90deg);
  }
  &[direction='down'] {
    transform: rotate(90deg);
  }
  &[direction='left'] {
    transform: rotate(180deg);
  }
  &[active='true'] {
    filter: invert();
  }
`

export default function Home() {
  document.addEventListener('keydown', toggleArrowOn)
  document.addEventListener('keyup', toggleArrowOff)

  function toggleArrowOn(e) {
    if (e.keyCode === 38) {
      document.getElementById('up').setAttribute('active', 'true')
    }
    if (e.keyCode === 37) {
      document.getElementById('left').setAttribute('active', 'true')
    }
    if (e.keyCode === 40) {
      document.getElementById('down').setAttribute('active', 'true')
    }
    if (e.keyCode === 39) {
      document.getElementById('right').setAttribute('active', 'true')
    }
  }

  function toggleArrowOff(e) {
    if (e.keyCode === 38) {
      document.getElementById('up').setAttribute('active', 'false')
    }
    if (e.keyCode === 37) {
      document.getElementById('left').setAttribute('active', 'false')
    }
    if (e.keyCode === 40) {
      document.getElementById('down').setAttribute('active', 'false')
    }
    if (e.keyCode === 39) {
      document.getElementById('right').setAttribute('active', 'false')
    }
  }

  return (
    <div css={homePageWrapperCss}>
      <Navbar />
      <div css={homeContentWrapperCss}>Home Page content</div>
      <div css={arrowWrapperCss}>
        <div css={arrowTopRowCss}>
          <img direction="up" id="up" active="false" up src={arrow} alt="" css={arrowCss} />
        </div>
        <div css={arrowBottomRowCss}>
          <img direction="left" id="left" active="false" src={arrow} alt="" css={arrowCss} />
          <img direction="down" id="down" active="false" src={arrow} alt="" css={arrowCss} />
          <img id="right" active="false" src={arrow} alt="" css={arrowCss} />
        </div>
      </div>
    </div>
  )
}
