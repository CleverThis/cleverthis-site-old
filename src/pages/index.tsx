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
    <div id="trigger-comet" />
    <Controller>
      <Scene triggerElement="#trigger-comet" duration={1200} offset={300} pin={false}>
        {progress => (
          <Tween
            from={{
              css: {
                left: '-150px',
                top: '-25vh'
              }
            }}
            to={{
              css: {
                left: '120vw',
                top: '60vh'
              }
            }}
            totalProgress={progress}
            paused
          >
            <div className="comet"></div>
          </Tween>
        )}
      </Scene>
      <Scene duration={1200} offset={250} pin>
        <div className="cloud-section">
          <div className="nebula" />
          <div className="textcard textcard-cloud">
            <div className="textcard-content">
              <h2>The Cloud</h2>
              <p>
                The cloud is a place of fluffiness with things of fluff and rain and rainbows.
                Fluffiness is how soft something is, rocks arent fluffy, clouds are. So buy our
                product and be fluffy!
              </p>
            </div>
          </div>
        </div>
      </Scene>
    </Controller>
    <div id="animation-end"></div>
  </>
)

const LayoutIndexPage = () => (
  <Layout>
    <IndexPage />
  </Layout>
)

export default LayoutIndexPage
