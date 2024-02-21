
type CardProps = {
    word: string | number,
    title: string
}

const DuaCard = ({ word, title }: CardProps) => {
    return (
        <div className="p-2 rounded-xl flex items-center gap-4 bg-white">
            <div className="w-16 h-16 min-w-16 flex justify-center items-center rounded-xl text-[32px] text-primary bg-icon-bg">{word}</div>
            <p>{title}</p>
        </div>
    );
}

export default DuaCard;