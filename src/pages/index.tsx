import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import { Layout } from '../components/Layout'
import '../styles/title-animate.scss'
import '../styles/stars.scss'

const style = {
    emphesis: css`
        color: yellow;
    `
}

export const IndexPage = () => (
  <>
    <div class='stars'></div>
    <div class='stars1'></div>
    <div class='stars2'></div>
    <div class='stars3'></div>
    <div class='twinkling'></div>
    <div class='title-content'>
        <div class="title-content__container">
            <div class="title-content__container__text">
                Clever
            </div>
            <ul class="title-content__container__list">
                <li class="tite-content__container__list__item">Me</li>
                <li class="title-content__container__list__item">You</li>
                <li class="title-content__container__list__item">Us</li>
                <li class="title-content__container__list__item" css={style.emphesis}>This</li>
            </ul>
        </div>
    </div>
    {/* <div>
        <h2>Hi people</h2>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <p>
        <Link to="/another-page/">Go to another page</Link>
        </p>
        <p>
        <Link to="/all/">See content generated from Markdown files</Link>
        </p>
        </div> */}
  </>
)

const LayoutIndexPage = () => (
  <Layout>
    <IndexPage />
  </Layout>
)

export default LayoutIndexPage
