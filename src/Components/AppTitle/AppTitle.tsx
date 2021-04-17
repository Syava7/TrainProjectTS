import React from 'react';

type TitleProps = {
  title: string
}

const AppTitle = (props: TitleProps) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}

export default AppTitle;