import Image from "next/image";

export default function BackgroundImage() {
    return (
        <>
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/background-image.jpg" // replace with your image path
                    layout="fill"
                    objectFit="cover"
                    className="blur-sm"
                    alt="Background"
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50" />
        </>
    );
}
