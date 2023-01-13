import React, { useState } from 'react'
// import { Keyboard } from 'iconsax-react'
import './InputItem.css';

function InputItem({ Icon, lable}) {
    const [imageData,setImage] = useState(null)

    var reader = new FileReader();
    reader.onload = function(e) {
        setImage(reader.result);
        // console.log(reader.result)
    }

    return (
        <div className="InputItem">
            <div className="lable">{lable}</div>
            <div className="input-field">
                <Icon size="30" />
                <div style={{position:'relative',width:'80%'}}>    
                {lable === 'Image' && <input type="file" accept="image/png, image/jpeg"
                    onChange={(e) => { reader.readAsDataURL(e.target.files[0]); }}
                    style={{height:'150px'}}
                    />}
                {imageData && <img src={imageData} alt="" />}
                {lable !== 'Description' && lable !== 'Image' && <input type={ lable === "Price" ?"number":"text"} />}
                {lable === 'Description' && <textarea name="" id="" rows='5' ></textarea>}
                
            </div>
            </div>

        </div>
    );
}

export default InputItem;
