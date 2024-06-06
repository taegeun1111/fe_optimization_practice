import React from 'react'

const Text = ({ children }: { children: string }) => {
  const message = children.split('\n').map((str, index, array) => {
    return (
      <React.Fragment key={index}>
        {str}
        {index === array.length - 1 ? null : <br />}
      </React.Fragment>
    )
  })

  return <div>{message}</div>
}

export default Text
