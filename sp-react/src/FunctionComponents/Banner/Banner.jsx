import React, {useState} from  "react";
import BANNER from "./constant";

function Banner({currentPage, imgSrc}){
    // const { currentPage, imgSrc } = props;
    const [ counter, setCounter ] = useState(0);
    const [value, setValue] = useState();

    
    const handleCounter = () => {
        if(counter < 6) {
            setCounter(counter+1);
        }
    }

    return (
        <>
            <h1>welcome to banner</h1>
            <div>{BANNER.ATTEND}</div>
            {
                BANNER.PREHEADER_ICONS.map((ele, index) => {
                    return <i className={`${ele} iconsss`} key={index}></i>
                })
            }
            {
               currentPage === 'homepage' ? <div>OFFER</div> : ''
            }
            <img src={imgSrc} className="App-logo" alt="logo" />
            <div>{counter}</div>
            <button onClick={handleCounter}>Test</button>
        </>
        )
}

export default Banner;