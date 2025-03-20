import Button from "@/components/atoms/Button";
import DownloadIcon from "@/components/icons/Download";
import Image from "next/image";

export default function Home() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
                        PT Data Integrasi Inovasi
                    </h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                        Kami adalah perusahaan IT yang mengkhususkan diri dalam pembuatan aplikasi rumah sakit. Dengan pengalaman dan keahlian kami, kami menciptakan solusi inovatif untuk meningkatkan efisiensi dan kualitas pelayanan kesehatan.
                    </p>
                    <div className="flex items-center gap-4 mb-6">
                        <Button testID="basic-button" size="sm" variant="blue">
                            Small Size
                        </Button>
                        <Button testID="basic-button" size="md" variant="green">
                            Medium Size
                        </Button>
                        <Button testID="basic-button" size="lg" variant="red">
                            Large Size
                        </Button>
                        <Button testID="basic-button" size="lg" variant="purple">
                            Large Size
                        </Button>
                        <Button testID="basic-button" size="lg" variant="yellow">
                            Large Size
                        </Button>
                    </div>
                    <div className="flex items-center gap-4 mb-6">
                        <Button testID="basic-button" size="sm" variant="light-blue">
                            Small Size
                        </Button>
                        <Button testID="basic-button" size="md" variant="light-green">
                            Medium Size
                        </Button>
                        <Button testID="basic-button" size="lg" variant="light-red">
                            Large Size
                        </Button>
                        <Button
                            testID="basic-button"
                            size="lg"
                            variant="light-purple"
                        >
                            Large Size
                        </Button>
                        <Button
                            testID="basic-button"
                            icon={<DownloadIcon />}
                            iconBackground="circle"
                            iconColor="green"
                            iconBackgroundColor="red"
                            iconPosition="left"
                            size="lg"
                            variant="light-yellow"
                        >
                            Large Size
                        </Button>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button 
                            testID="download-button"
                            icon={<DownloadIcon />}
                            iconPosition="left"
                            variant="green"
                            tooltip="Download Now"
                            tooltipPosition="left"
                            size="md"
                        >
                            Download Left
                        </Button>
                        <Button 
                            testID="download-button"
                            icon={<DownloadIcon />}
                            iconPosition="right"
                            variant="green"
                            tooltip="Download Now"
                            size="md"
                        >
                            Download Right
                        </Button>
                        <Button 
                            testID="download-button"
                            icon={<DownloadIcon />}
                            iconPosition="left"
                            variant="light-red"
                            tooltip="Download Now"
                            tooltipPosition="bottom"
                            size="md"
                        >
                            Download Left
                        </Button>
                        <Button 
                            testID="download-button"
                            icon={<DownloadIcon />}
                            iconPosition="right"
                            variant="light-red"
                            tooltip="Download Now"
                            tooltipPosition="right"
                            size="md"
                        >
                            Download Right
                        </Button>
                    </div>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <Image src="/hero.png" alt="hero image" width={500} height={500} className="w-full h-full max-w-lg rounded-lg" />
                </div>
            </div>
        </section>
    )
}
