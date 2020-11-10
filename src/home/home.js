import React, { useState } from 'react'
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

const svgCss = css`
  overflow: visible;
  // color: white;
  color: green;
`

const arrowWrapperCss = css`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-bottom: 30px;
  position: fixed;
  bottom: 0;
  left: 0;
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
  border-radius: 15px;
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

const eraseButtonCss = css`
  position: fixed;
  bottom: 30px;
  right: 30px;
  font-size: 3em;
  padding: 18px 35px;
  border-radius: 15px;
  outline: none;
  border: none;
  background-color: red;
  color: white;
  cursor: pointer;
`

export default function Home() {
  const [activeLine, setActiveLine] = useState('M150 100 L152 100')
  const [moveVert, setMoveVert] = useState(152)
  const [moveHoriz, setMoveHoriz] = useState(100)

  document.addEventListener('keydown', toggleArrowOn)
  document.addEventListener('keyup', toggleArrowOff)

  function toggleArrowOn(e) {
    if (e.keyCode === 38) {
      document.getElementById('up').setAttribute('active', 'true')
      moveSvg(-15, 0)
    }
    if (e.keyCode === 37) {
      document.getElementById('left').setAttribute('active', 'true')
      moveSvg(0, -15)
    }
    if (e.keyCode === 40) {
      document.getElementById('down').setAttribute('active', 'true')
    }
    if (e.keyCode === 39) {
      document.getElementById('right').setAttribute('active', 'true')
    }
  }

  function moveSvg(horiz, vert) {
    setMoveVert(moveVert + vert)
    setMoveHoriz(moveHoriz + horiz)
  }

  function toggleArrowOff(e) {
    if (e.keyCode === 38) {
      document.getElementById('up').setAttribute('active', 'false')
      setActiveLine(activeLine.concat(`L${moveHoriz} ${moveVert}`))
    }
    if (e.keyCode === 37) {
      document.getElementById('left').setAttribute('active', 'false')
      setActiveLine(activeLine.concat(`L${moveVert} ${moveHoriz}`))
    }
    if (e.keyCode === 40) {
      document.getElementById('down').setAttribute('active', 'false')
    }
    if (e.keyCode === 39) {
      document.getElementById('right').setAttribute('active', 'false')
    }
  }

  function erase() {
    setActiveLine('M150 100 L152 100')
    setMoveHoriz(100)
    setMoveVert(152)
  }

  return (
    <div css={homePageWrapperCss}>
      <Navbar />
      <div css={homeContentWrapperCss}>
        <svg css={svgCss}>
          {/* <circle cx="50" cy="50" r="40" /> */}
          {/* <path d="M150 100 L152 100 " strokeWidth="3" fill="none" stroke="black" /> */}
          <path d={activeLine} strokeWidth="3" fill="none" stroke="black" />
        </svg>
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
        <button css={eraseButtonCss} onClick={erase} type="button">
          Erase
        </button>
      </div>
    </div>
  )
}
