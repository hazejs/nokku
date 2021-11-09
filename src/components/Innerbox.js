import React from 'react'

export const Innerbox = ({obj}) => {
    const getByType = () => {
        if (obj.type === 'chart') {
            return (
                <div className="charts" style={{background: obj.backgroundColor, height: '100%'}}>
                    <div className="chart-1" style={{background: obj.color}}></div>
                    <div className="chart-2" style={{background: obj.color}}></div>
                    <div className="chart-3" style={{background: obj.color}}></div>
                    <div className="chart-4" style={{background: obj.color}}></div>
                </div>
            )
        } else {
            if(obj.id === 2) {
                return (
                    <div className="percentage-container" style={{background: obj.backgroundColor, height: '100%'}}>
                        <figure className="chart-one animate">
                            <svg role="img" xmlns="http://www.w3.org/2000/svg">
                                <circle className="circle-background"/>
                                <circle className="circle-foreground"/>
                            </svg>
                            <figcaption>40% of all males like donuts.</figcaption>
                        </figure>
                    </div>
                )
            }
            if(obj.id === 4) {
                return (
                    <div className="percentage-container" style={{background: obj.backgroundColor, height: '100%'}}>
                        <figure className="chart-two animate">
                            <svg role="img" xmlns="http://www.w3.org/2000/svg">
                                <circle className="circle-background"/>
                                <circle className="circle-foreground"/>
                            </svg>
                            <figcaption>40% of all males like donuts.</figcaption>
                        </figure>
                    </div>
                )
            }
        }
    }
    return (
        <>
            {getByType()}
        </>
    )
}
