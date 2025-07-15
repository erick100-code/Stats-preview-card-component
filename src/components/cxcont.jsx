import Date from "./dados"

function Cxcont() {
    return (
        <div className="w-[50%] h-full p-14 max-[1073px]:p-7 max-[1073px]:w-full max-[1073px]:h-[70%] max-[1073px]:text-center">
            
            <div className="w-full h-full flex flex-col justify-between ">
                <div className="space-y-6">
                    <h1 className="text-4xl font-semibold max-[1073px]:text-[25px]">
                        Get <strong className="text-purple-500 font-semibold">insights</strong> that help your business grow.
                    </h1>
                    <p className="text-[#ffffff99] text-[15px] max-w-[350px] max-[1073px]:text-[13px] max-[1073px]:mx-auto">
                        Discover the benefits of data analytics and make better decisions regarding revenue, customer
                        experience, and overall efficiency.
                    </p>
                </div>

                <div className="flex gap-[0px_50px] max-[1073px]:flex-col max-[1073px]:gap-[20px_0px]">
                    <Date num={'10k+'} text={'companies'} />
                    <Date num={'314'} text={'templates'} />
                    <Date num={'12m+'} text={'queries'} />
                </div>
            </div>

        </div>

    )
}


export default Cxcont