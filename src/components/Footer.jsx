import React from 'react'
import {useStateContext} from '../contexts/contextProvider'
export const Footer = () => {
    const {currentColor, currentTextColor} = useStateContext();
    return (
        <footer style={{backgroundColor: currentColor}}>
            <p>&lt;&lt;&lt; &copy; Michelle, source: freecodecamp &gt;&gt;&gt;</p>
        </footer>
    )
}
