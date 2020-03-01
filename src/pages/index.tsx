import React from 'react'
import { css } from '@emotion/core'
import { withPrefix, Link } from 'gatsby'
import { Layout } from '../components/Layout'
import '../styles/title-animate.scss'
import '../styles/stars.scss'
import '../styles/scroll-animate.scss'
import Helmet from 'react-helmet'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween, Timeline } from 'react-gsap'
import styled from 'styled-components'

const style = {
  emphesis: css`
    color: yellow;
  `
}

const TweenStyled = styled.div`
  .section {
    height: 100vh;
  }

  .tween {
    width: 100px;
    height: 100px;
    background-color: red;
    margin: 0 !important;
    position: relative;
    left: calc(50% - 50px);
  }

  .stagger {
    width: 50px;
    height: 50px;
    left: 700px;
    background-color: green;
    position: relative;
  }
`

export const IndexPage = () => (
  <>
    <div className="stars"></div>
    <div className="stars1"></div>
    <div className="stars2"></div>
    <div className="stars3"></div>
    <div className="twinkling"></div>
    <div className="title-content">
      <div className="title-content__container">
        <div className="title-content__container__text">Clever</div>
        <ul className="title-content__container__list">
          <li className="tite-content__container__list__item">Me</li>
          <li className="title-content__container__list__item">You</li>
          <li className="title-content__container__list__item">Us</li>
          <li className="title-content__container__list__item logo-emphesis">This</li>
        </ul>
      </div>
    </div>
    <div>
      <TweenStyled>
        <div id="trigger-comet" />
        <Controller>
          <Scene triggerElement="#trigger-comet" duration={1200} pin={false}>
            {progress => (
              <Tween
                from={{
                  css: {
                    left: '-150px',
                    top: '-35vh'
                  }
                }}
                to={{
                  css: {
                    left: '120vw',
                    top: '30vh'
                  }
                }}
                totalProgress={progress}
                paused
              >
                <div className="comet"></div>
              </Tween>
            )}
          </Scene>
        </Controller>
      </TweenStyled>
      <div className="nebula" />
      <div className="textcard textcard-cloud">
        <div className="textcard-content">
          <h2>The Cloud</h2>
          <p>
            The cloud is a place of fluffiness with things of fluff and rain and rainbows.
            Fluffiness is how soft something is, rocks arent fluffy, clouds are. So buy our product
            and be fluffy!
          </p>
        </div>
      </div>
      <div id="animation-end"></div>
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
