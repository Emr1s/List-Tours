import React from 'react'
import './Tour.scss'
import { useState } from 'react'

const Tour = ({ tours,removeTour }) => {
    const [readMore, setReadMore] = useState(true)
    return (
        <div className='tour'>
            {tours?.map((t) => (
                <div className="item" key={t.id}>
                    <div className="top">
                        <img src={t.image} alt="" />
                    </div>
                    <div className="bottom">
                        <div className="title">
                            <h3>{t.name}</h3>
                            <span>${t.price}</span>
                        </div>
                        <div className="info">
                            <p>{readMore ? `${t.info.slice(0, 200)}...` : t.info}
                                <button onClick={() => setReadMore(!readMore)}>{!readMore ? 'Show Less' : 'Read More'}</button>
                            </p>

                        </div>
                        <div className="btn">
                            <button onClick={() =>removeTour(t.id) }>Not Interested</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Tour