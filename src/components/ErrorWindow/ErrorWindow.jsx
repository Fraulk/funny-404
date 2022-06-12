import { useState } from 'react'
import { manualPath } from '../../manualPath'
import './ErrorWindow.css'


export const ErrorWindow = (props) => {
    const [isDragged, setIsDragged] = useState(false)
    const [dragEl, setDragEl] = useState(null)
    const [top, setTop] = useState(194)
    const [left, setLeft] = useState(786)
    const [clones] = useState(manualPath)

    const handleDragStart = (e) => {
        setIsDragged(true)
        setDragEl(e)
    }

    const handleDrag = (e) => {
        if (!isDragged) return
        e.preventDefault()
        setTop(e.pageY - dragEl.nativeEvent.layerY)
        setLeft(e.pageX - dragEl.nativeEvent.layerX)
        clones.push({top, left})
    }

    const handleDragEnd = () => {
        setIsDragged(false)
        setDragEl(null)
    }

    // https://dribbble.com/shots/12120514-Error-State-Illustration-3
    return (
        <div className="errorWindow" onMouseMove={handleDrag} onMouseUp={handleDragEnd}>
            <div className="errorWindow__window original" onMouseDown={handleDragStart} style={{top, left}}>
                <div className="errorWindow__topbar">
                    <span className="errorWindow__title">ERROR</span>
                    <span className="errorWindow__close">✖</span>
                </div>
                <div className="errorWindow__content">
                    <div className="errorWindow__leftContent">
                        <div className="errorWindow__errorSymbol">✖</div>
                    </div>
                    <div className="errorWindow__rightContent">
                        <div className="title">404</div>
                        <div className="content">
                            Looks like  an error has occured. <br />
                            This page does not exists.
                        </div>
                    </div>
                </div>
                    <div className="errorWindow__actions">
                        <div className="errorWindow__button">
                            OK
                        </div>
                    </div>
            </div>
            {clones.length > 0 &&
                clones.map((item, i) => 
                    <div className="errorWindow__window" style={{top: item.top, left: item.left}} key={i}></div>
                )
            }
        </div>
    )
}

export default ErrorWindow