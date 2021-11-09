import React from 'react'

export const Card = ({children, val, title}) => {
    return (
        <div className="card-container">
            <div className="inner-container">
                {children}    
            </div>        
            <div className="data-container">
                <div className="card-data">
                    <span className="data-title"><b>{val}</b></span>
                    <span>{title}</span>
                </div>
            </div>    
        </div>
    )
}
