import './animation.css'


const PlayerAnimation = () => {
    const bars = new Array(20).fill('bar');

    const span = bars.map((a, i) => {
        const randNum = Math.random()
        return <span key={i} style={{ 'animationDelay': `${randNum}s`, "height": `${100 * randNum}%` }} className={`playing__bar playing__bar${i + 1}`}></span>
    })

    return (
        <div className="playing">
            {span}
        </div>
    );
}

export default PlayerAnimation;