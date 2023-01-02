import ReactTyped from "react-typed";

export default function Hero() {
    return (
        <div className="text-white mt-40">
            <div className="max-w-4xl w-full h-screen mx-auto text-center flex flex-col">
                <p className="text-cyan-400">GROWING WITH DATA ANALYTICS</p>
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold md:py-6">GROW WITH DATA.</h1>
                <div className="flex justify-center items-center gap-2">
                    <p className="text-xl font-bold py-4 sm:text-4xl md:text-5xl">
                        fast, flexible and financing for
                    </p>
                    <ReactTyped
                        className="text-xl font-bold sm:text-4xl md:text-5xl"
                        strings={['BTB', 'BTC', 'ETH ']}
                        typeSpeed={140}
                        backSpeed={120}
                    />
                </div>
                <p className="text-xl md:text-2xl font-bold text-gray-500">
                    Monitor your crypto portfolio and get real-time alerts on price changes.
                </p>
                <button className="bg-cyan-400 mx-auto rounded-md font-medium my-6 px-6 py-3 text-black">
                    Get Started
                </button>
            </div>
        </div>
    )
}
