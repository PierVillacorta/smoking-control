import type React from "react"

const Error = ({children} : {children : React.ReactNode}) => {
  return (
    <p className="text-sm bg-red-600 font-bold text-white mt-1 p-1 text-center uppercase">
      {children}
    </p>
  )
}

export default Error