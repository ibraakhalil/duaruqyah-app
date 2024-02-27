import './animation.css'


const PlayerAnimation = ({ play }: { play: boolean }) => {
    const bars = new Array(20).fill('bar');

    const span = bars.map((a, i) => {
        const randNum = Math.random()
        return <span key={i} style={{ 'animationDelay': `${randNum}s`, "height": `${play ? (100 * randNum): '5'}%` }} className={`playing__bar ${play && 'play'} playing__bar${i + 1}`}></span>
    })

    return (
        <div className="playing max-md:mb-10">
            {span}
        </div>
    );
}

export default PlayerAnimation;