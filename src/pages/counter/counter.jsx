import { ScreenContainer } from "../../components/screen-container/screen-container"
import background from "../../assets/counter.png"
import { useEffect, useRef, useState } from "react"
import { getDatesDiffDiscriminated } from "../../utils/time"
import { WEDDING_DATE } from "../../constants"
import "./counter.css"

export const Time = ({ number, descriptor, isLast = false }) => {
    return <section className="time">
        <div className="content">
            <h1 className="dm-serif-display-regular">{number}</h1>
            <p>{descriptor}</p>
        </div>
        {!isLast && <h1 className="dm-serif-display-regular separator"> : </h1>}
    </section>
}

export const Counter = () => {
    const intervalId = useRef();
    const [times, setTimes] = useState([])

    useEffect(() => {
        intervalId.current = setInterval(() => {
            const datesDiff = getDatesDiffDiscriminated(WEDDING_DATE, new Date())
            setTimes(datesDiff)
        }, 1000)

        return () => clearInterval(intervalId.current)
    }, [])

    return <ScreenContainer bgImg={background}>
        <article className="counter">
            <h1 className="josephine">Te esperamos en</h1>
            <div className="row">
                {times.map(({ time, label }, i) => <Time key={label} number={time} descriptor={label} isLast={i === times.length - 1} />)}
            </div>
        </article>
    </ScreenContainer>
}