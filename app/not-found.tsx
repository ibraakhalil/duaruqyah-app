import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div className="flex justify-center py-16 items-center h-[calc(100vh-110px)] bg-white rounded-3xl overflow-auto sidebar-thin">
            <div className="w-[765px] text-center bg-[url('/images/404.png')] bg-contain bg-no-repeat">
                <h1 className="mt-[250px] text-[56px] font-semibold text-primary">SUBHAN ALLAH</h1>
                <h2 className="text-[36px] my-2 mt-0 font-medium">Page Not Found</h2>
                <p className="text-lg w-[450px] text-gray-500 mx-auto">We’re sorry, the page you requested could not be found. Please go back to the Homepage</p>
                <Link className="my-4 flex justify-center" href='/'>
                    <button className="bg-primary rounded-md px-4 py-3 text-white">Back to Home</button>
                </Link> 
            </div>
        </div>
    );
}

export default NotFoundPage;