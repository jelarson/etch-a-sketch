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
  &:hover {
    filter: invert();
  }
`

export default function Home() {
  return (
    <div css={homePageWrapperCss}>
      <Navbar />
      <div css={homeContentWrapperCss}>Home Page content</div>
      {/* <Footer /> */}
      <div css={arrowWrapperCss}>
        <div css={arrowTopRowCss}>
          <img src={arrow} alt="" css={arrowCss} />
        </div>
        <div css={arrowBottomRowCss}>
          {/* <div css={arrowCss}> */}
          <img src={arrow} alt="" css={arrowCss} />
          {/* </div> */}
          {/* <div css={arrowCss}> */}
          <img src={arrow} alt="" css={arrowCss} />
          {/* </div> */}
          {/* <div css={arrowCss}> */}
          <img src={arrow} alt="" css={arrowCss} />
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}
