import './ColItem.css'
import {Graph} from 'iconsax-react';
import { useEffect } from 'react';

function ColItem({Icon, color, heading, size, varient, rotate, value, percent}) {
    // const StateColor = {
    //     Active: '#68ae73',
    //     Deactive: '#BF7480',
    //     Draft: '#9CC9D4'
    // }
    useEffect(() => {
      console.log(rotate,`rotateX(${rotate})`)
    }, [])
    
    function addAlpha(color, opacity) {
        var _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
        return color + _opacity.toString(16).toUpperCase();
    }


    return (
        <div className="ColItem"  style={{background:addAlpha(color,0.15)}}>
            <div className="colItem-top">
                <div className="colItem-icon">
                    <Icon size={size} variant={varient} />
                </div>
                <span>{heading}</span>
            </div>
            <div className="colItem-bottom">
                <div className="colIem-bottom-left">
                    <span>{value}</span>
                    <span>{percent}</span>
                </div>
                <div className="colItem-bottom-right">
                    <Graph size="40" color={color} variant="Bulk" style={{transform:`rotateZ(${rotate})`}}/>
                </div>
            </div>
        </div>
    )
}

export default ColItem;