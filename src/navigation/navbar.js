import React from 'react'
import { css } from '@emotion/core'

import NavLink from './navlink'

const navbarWrapperCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: grey;
`
const navbarTitleCss = css`
  font-size: 1.3em;
  margin-top: 10px;
  margin-bottom: 10px;
  color: white;
`

// const navbarLinksWrapperCss = css`
//   display: flex;
//   flex-direction: row;
//   width: 60%;
//   justify-content: space-between;
//   margin-top: 12px;
//   margin-bottom: 12px;
// `

export default function Navbar() {
  return (
    <div css={navbarWrapperCss}>
      <div css={navbarTitleCss}>Etch-A-Sketch!</div>
      {/* <div css={navbarLinksWrapperCss}>
        <NavLink path="/link1" buttonText="Link #1" />
        <NavLink path="/link2" buttonText="Link #2" />
        <NavLink path="/link3" buttonText="Link #3" />
      </div> */}
    </div>
  )
}
