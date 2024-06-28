import React, {useState, useRef} from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import {useStateContext} from '../contexts/contextProvider';
// import { SketchPicker, CirclePicker } from 'react-color';
export const Headers = () => {
    const {currentColor, setCurrentColor, currentMemeTextColor, setCurrentMemeTextColor} = useStateContext();
    const [activeSettingBar, setActiveSettingBar] = useState(false);
    const colorRef = useRef(currentColor);
    const memeColorRef = useRef(currentMemeTextColor);
    function handleColorChange(event, changeOP){
        if(changeOP === 'bg'){
            colorRef.current = event.target.value;
        } else{
            memeColorRef.current = event.target.value;
        }
    }

    function handleBlur(changeOP){
        if(changeOP === 'bg'){
            setCurrentColor(colorRef.current);
        } else{
            setCurrentMemeTextColor(memeColorRef.current);
        }
    }

    const SettingBar=()=>{
        return(
            <div className="settingBar">
                <div className="settingHeader">
                    <h2 style={{color: 'white', textShadow: `-1px 1px 0 ${currentColor}, 1px 1px 0 ${currentColor}, 1px -1px 0 ${currentColor}, -1px -1px 0 ${currentColor}`}}>Color Setting:</h2>
                    <button style={{color: currentColor, border: 'none', fontSize: '1.6rem'}}
                            className="settingBarCloseBtn"
                            onClick={()=>setActiveSettingBar(false)}>
                                <IoIosCloseCircleOutline className="closeBtn"/>
                    </button>
                </div>
                <div>
                    <div className="colorPicker">
                        <label htmlFor="color-picker" style={{color: currentColor}}>Color:</label>
                        <input id="color-picker" type="color" value={currentColor} 
                                onChange={(e)=>handleColorChange(e, 'bg')} onBlur={()=>handleBlur('bg')}
                                />
                    </div>
                    <div className="memeTextColorPicker">
                        <label htmlFor="memeTextcolor-picker" style={{color: currentMemeTextColor}}>Meme Text Color:</label>
                        <input id="memeTextcolor-picker" type="color" value={currentMemeTextColor} 
                                onChange={(e)=>handleColorChange(e, 'meme')}
                                onBlur={()=>handleBlur('meme')}/>
                    </div>
                    {/* <div className="colorPicker">
                        <CirclePicker/>
                    </div> */}
                </div>
            </div>
        )
    }

    return (
        <header className="header"
                style={{backgroundColor: currentColor}}>
            <h1>Meme Generator</h1>
            <button className="settingBtn" 
                    onClick={()=>setActiveSettingBar((prevActive)=>!prevActive)}>
                <IoSettingsOutline className="settingIcon"/>
            </button>
            {activeSettingBar && <SettingBar/>}
        </header>
    )
}
