import React from 'react'

type TitlePropsType = {
  title: string
}

const AppTitle = (props: TitlePropsType) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}

export default AppTitle
