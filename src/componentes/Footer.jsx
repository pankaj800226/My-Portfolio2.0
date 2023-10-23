import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
  return (
 <footer>
    <div className="footer_text">
    copyright @ {year}CodeWithPankaj
    </div>
 </footer>
  )
}

export default Footer