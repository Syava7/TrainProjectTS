import React, { useState } from 'react'
import s from './OnOff.module.css'

const OnOff = () => {
  const [on, setOn] = useState(false)
  return (
    <div className={s.wrapOnOff}>
      {on ? (
        <div
          className={s.on}
          onClick={() => {
            setOn(true)
          }}
        >
          ON
        </div>
      ) : (
        <div
          className={s.disable}
          onClick={() => {
            setOn(true)
          }}
        >
          ON
        </div>
      )}
      {on ? (
        <div
          className={s.disable}
          onClick={() => {
            setOn(false)
          }}
        >
          OFF
        </div>
      ) : (
        <div
          className={s.off}
          onClick={() => {
            setOn(false)
          }}
        >
          OFF
        </div>
      )}
      {on ? (
        <div className={s.indicator}></div>
      ) : (
        <div className={s.indicatorDisable}></div>
      )}
    </div>
  )
}

export default OnOff
