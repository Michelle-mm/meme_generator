import React, {useRef, createRef} from 'react'
import {useStateContext} from '../contexts/contextProvider';
import html2canvas from 'html2canvas';

export const DownloadBtn = ({memeImgRef, OrgMemeImgRef}) => {
    // const imgRef = useRef(null);
    const {currentColor} = useStateContext();
    function screenshot(){
      if (OrgMemeImgRef.current) {
        // console.log(memeImgRef, memeImgRef.current)
          html2canvas(memeImgRef.current).then(function(canvas) {
          document.body.appendChild(canvas);
          let a = document.createElement('a');
          a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
          a.download = 'image.jpg';
          a.click();
      });
      }
      
    }
    
    return (
        <button className="downloadBtn"
                style={{backgroundColor: currentColor}}
                onClick={screenshot}>
            DowndLoad
        </button>
    )
}
