import React, { useState } from 'react'
import { Keyboard, Category2, DollarSquare, Note, Image} from 'iconsax-react'
import './Upload.css';
import InputItem from './InputItem';

function Upload({setIsAdd}) {
    const [uploadOpen, setUploadOpen] = useState(true);
    const handleClose = () => {
        setUploadOpen(false)
        setTimeout(() => {
            setIsAdd(false);
        }, 400);
    }
    return (
        <div className="Upload" style={{ animationName: uploadOpen ? 'animateup' : 'animatedown' }}>
            <div className="upload-top">
                <div className="horizontalLine" draggable="true" onClick={handleClose}></div>
                    <InputItem lable="Name" Icon={Keyboard} />
                <div className="InputItem" Icon={Keyboard}>
                    <div className="lable">Category</div>
                    <div className="input-field">
                        <Category2 size="28" />
                        {/* <input type="text" /> */}
                        <select  id="">
                            <option value="">Select</option>
                            <option value="coffee">Coffee</option>
                            <option value="tea">Tea</option>
                        </select>
                    </div>
                </div>
                <InputItem lable="Image" Icon={Image}/>
                <InputItem lable="Price" Icon={DollarSquare}/>
                <InputItem lable="Description" Icon={Note}/>
            </div>
            <div className="upload-bottom">
                <div className="close-btn buttons" onClick={handleClose} ><span>Close</span></div>
                <div className="upload-btn buttons"><span>Upload</span></div>
            </div>
        </div>
    );
}

export default Upload;
