import React, { useState, useEffect } from 'react';
import './list.css';
export default function List() {
    const [render, setrerender] = useState(false);
    const [edit, setedititem] = useState(false);
    let storeddatalist = JSON.parse(localStorage.getItem("storeddata"));
    const deleteitemfunction = (title, desc) => {

        storeddatalist = storeddatalist.filter((item) => item.title !== title && item.desc !== desc);
        localStorage.setItem("storeddata", JSON.stringify(storeddatalist))
        if (storeddatalist.length === 0) {
            localStorage.removeItem("storeddata")
        }
        setrerender(true)
    }

    const edititemfunction = (title, desc) => {
        const newtitle = prompt('Enter the new title!')
        const newcomment = prompt('Enter the new description');
        var Storeddata = JSON.parse(localStorage.storeddata)
        for (var i = 0; i < Storeddata.length; i++) {
            if (title == Storeddata[i].title || desc == Storeddata[i].desc) {
                Storeddata[i].title = newtitle;
                Storeddata[i].desc = newcomment;
                break;
            }
        }
        localStorage.setItem("storeddata", JSON.stringify(Storeddata));
        setedititem(true);
    }

    useEffect(() => {
        JSON.parse(localStorage.getItem("storeddata"))
    }, [render, edit])

    return (
        <div>
            {storeddatalist && storeddatalist.length > 0 && storeddatalist.map((item, index) => {
                return (
                    <div key={index}>
                        <div className="comment-container">
                            <div>
                                {item.title}
                            </div>
                            <div>
                                {item.desc}
                            </div>
                        </div>
                        <div className="parent">
                            <button className="child" onClick={() => edititemfunction(item.title, item.desc)}>
                                edit
                            </button>
                            <button className="child" onClick={() => deleteitemfunction(item.title, item.desc)}>
                                delete
                            </button>
                        </div>
                    </div>
                )

            })}
        </div>
    )
}