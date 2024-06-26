import Image from "next/image";

export const Heroes = () => {
    return (
        <div className="flex items-center justify-center max-w-5xl">
            <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
                <Image 
                    src="/reading-lightmode.png"
                    fill
                    className="object-contain" //dark:hidden
                    alt="Documents"
                />
                {/* <Image 
                    src="/reading-darkmode.png"
                    fill
                    className="object-contain hidden dark:block"
                    alt="Reading"
                /> */}
            </div>
            <div className="relative h-[360px] w-[400px] hidden md:block">
                <Image 
                    src="/documents-lightmode.png"
                    fill
                    className="object-contain" //dark:hidden
                    alt="Reading"
                />
                {/* <Image 
                    src="/documents-darkmode.png"
                    fill
                    className="object-contain hidden dark:block"
                    alt="Reading"
                /> */}
            </div>
        </div>
    )
}