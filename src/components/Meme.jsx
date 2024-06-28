import React,{useState, useEffect, useRef} from 'react';
import {useStateContext} from '../contexts/contextProvider';
import {DownloadBtn} from './DownloadBtn';
export const Meme = () => {
    const {currentColor, currentMemeTextColor} = useStateContext();
    const [meme, setMeme] = useState({
        topText: 'top text',
        bottomText: 'bottom text',
        randomMemeImgUrl: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemes, setAllMemes] = useState([]);
    const memeImgRef = useRef(null);
    const OrgMemeImgRef = useRef(null);
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage(){
        const memesArray = allMemes;
        const randomNumber = Math.floor(Math.random()*memesArray.length);
        const randomMemeUrl = memesArray[randomNumber].url;
        setMeme((prevMeme)=>({
            ...prevMeme, 
            randomMemeImgUrl: randomMemeUrl
        }));
    }

    function handleChange(event) {
        const {name, value} = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    return (
        <div className="MemeGenerator">
            <div className="editBox">
                <div className="inputs">
                    <label htmlFor="topText" style={{color: currentColor}}>
                        Top text
                        <input type="text" id='topText' name="topText"
                                onChange={handleChange} style={{borderColor: currentColor}}/>
                    </label>
                    <label htmlFor="bottomText" style={{color: currentColor}}>
                        Bottom text
                        <input type="text" id='bottomText' name="bottomText" 
                                onChange={handleChange} style={{borderColor: currentColor}}/>
                    </label>
                </div>
                <button className="getNewMemeBtn"
                        onClick={getMemeImage}
                        style={{backgroundColor: currentColor}}>
                    Get a new Meme Image
                </button>
            </div>
            <div className="memeImgBox" ref={memeImgRef}>
                <img src={meme.randomMemeImgUrl} ref={OrgMemeImgRef} alt="memeimage" className="memeImg" width="400" height="300"/>
                <div className="memeText">
                    <p className="memeTopText" style={{color: currentMemeTextColor}}>{meme.topText}</p> 
                    <p className="memeBottomText" style={{color: currentMemeTextColor}}>{meme.bottomText}</p> 
                </div>
            </div>
            
            {/* <DownloadBtn memeImgRef={memeImgRef} OrgMemeImgRef={OrgMemeImgRef} /> */}
        </div>
    )
}
