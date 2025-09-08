import React from 'react'

const Title = ({ text1, text2, color = "#611627", className = "" }) => {
  return (
    <div className={`inline-flex items-center gap-2 mb-3 ${className}`}>
      <p style={{ color: color }} className="font-medium">
        {text1} &nbsp;
        <span>{text2}</span>
      </p>
      <p className="w-8 sm:w-12 h-[1px] sm:h-[2px]" style={{ backgroundColor: color }}></p>
    </div>
  )
}

export default Title
