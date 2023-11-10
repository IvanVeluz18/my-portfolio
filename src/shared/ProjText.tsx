import React from 'react'

type Props = {
    children: React.ReactNode;
}

const ProjText = ({children}: Props) => {
  return (
    <h1 className="basis-3/5 font-montserrat text-4xl font-bold text-white-200">{children}</h1>
  );
}

export default ProjText