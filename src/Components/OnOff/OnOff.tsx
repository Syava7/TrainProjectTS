import React from 'react'
import s from './OnOff.module.css'

type OnOffPropsType = {
  on: boolean
  onClickToogle: (on: boolean) => void
}




const OnOff = (props: OnOffPropsType) => {
  return (
    <div className={s.wrapOnOff}>
      {props.on ? (
        <div
          className={s.on}
          onClick={() => {
            props.onClickToogle(props.on)
          }}
        >
          ON
        </div>
      ) : (
        <div
          className={s.disable}
          onClick={() => {
            props.onClickToogle(!props.on)
          }}
        >
          ON
        </div>
      )}
      {props.on ? (
        <div
          className={s.disable}
          onClick={() => {
            props.onClickToogle(!props.on)
          }}
        >
          OFF
        </div>
      ) : (
        <div
          className={s.off}
          onClick={() => {
            props.onClickToogle(props.on)
          }}
        >
          OFF
        </div>
      )}
      {props.on ? (
        <div className={s.indicator}></div>
      ) : (
        <div className={s.indicatorDisable}></div>
      )}
    </div>
  )
}

export default OnOff
