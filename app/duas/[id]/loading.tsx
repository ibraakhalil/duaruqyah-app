

const loading = () => {
    return (
        <div className='h-[calc(100vh-120px)] overflow-hidden w-full pr-2'>
            <div className="bg-white rounded-xl mb-4 p-5 w-full">
                <p className="h-4 w-1/2 rounded-xl bg-icon-bg"></p>
            </div>
            <CardLoading />
            <CardLoading />
        </div>
    );
}

function CardLoading() {
    return (
        <div className="">
            <div className='item bg-white mb-4 rounded-xl p-6'>
                <div className="flex items-center gap-4  ">
                    <div className="w-12 h-12 rounded-full bg-icon-bg animate-pulse"></div>
                    <p className="h-4 w-1/2 rounded-xl bg-icon-bg animate-pulse"></p>
                </div>
                <div className="py-5 mt-2">
                    <p className="h-3 w-full rounded-xl bg-icon-bg animate-pulse"></p>
                    <p className="h-3 w-full rounded-xl bg-icon-bg my-5 animate-pulse"></p>
                    <p className="h-3 w-1/2 rounded-xl bg-icon-bg animate-pulse"></p>
                    <p className="h-3 w-[150px] rounded-xl bg-icon-bg mt-[30px] animate-pulse"></p>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <div className="w-12 h-12 rounded-full bg-icon-bg"></div>
                    <div className="flex items-center gap-8">
                        <div className="w-8 h-8 rounded-full bg-icon-bg animate-pulse"></div>
                        <div className="w-8 h-8 rounded-full bg-icon-bg animate-pulse"></div>
                        <div className="w-8 h-8 rounded-full bg-icon-bg animate-pulse"></div>
                        <div className="w-8 h-8 rounded-full bg-icon-bg animate-pulse"></div>
                        <div className="w-8 h-8 rounded-full bg-icon-bg animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default loading;