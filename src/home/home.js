import React from 'react'
import { css } from '@emotion/core'

import Navbar from '../navigation/navbar'

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

export default function Home() {
  return (
    <div css={homePageWrapperCss}>
      <Navbar />
      <div css={homeContentWrapperCss}>Home Page content</div>
      {/* <Footer /> */}
    </div>
  )
}
