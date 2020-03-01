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
                left: '-10%',
                top: '20%'
              }
            }}
            to={{
              css: {
                left: '120%',
                top: '50%'
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
                Large corperations are in control, we call it the cloud, run by rich corperations
                that only see you as a commodity. Meanwhile most computers in our community sit idle
                throughout the day. It is time the community owns the cloud, we are taking control
                again. Its our privacy, our data, our ideas, now its our rules. Fair prices set by
                the community, and the profits go back to the community, not large corperations.
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
