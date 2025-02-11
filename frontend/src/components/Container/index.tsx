import React from "react"

type Props = {
  children: React.ReactNode;
}

export const Container = (props: Props) => {
  const {
    children,
  } = props;

  return (
    <div className='w-full max-w-screen-sm mx-auto flex flex-col justify-center items-center'>
      { children }
    </div>
  )
}