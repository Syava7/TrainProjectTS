import React from 'react'
import s from './OnOff.module.css'

type PropsType = {
  on: boolean
}

const OnOff = (props: PropsType) => (
  <div className={s.wrapOnOff}>
    <div className={s.on}>ON</div>
    <div className={s.off}>OFF</div>
    <div className={s.indicator}></div>
  </div>
)

export default OnOff
