

const AboutUs = () => {
    return (
        <div className="h-80 bg-swirl -mx-[50%] bg-black flex flex-col gap-6 justify-center object-cover">
            {/* <img src="/GAPC-2024/assets/logo.png" alt="About Us" className="h-40 mx-auto object-contain" /> */}
            <span className="text-white text-center block font-jbMono text-6xl">&lt; gapc 2024 /&gt;</span>
            <span className="text-white text-center block font-jbMono text-lg">
                Made with ❤️ by <a href="#fcg" className="underline decoration-dotted underline-offset-4">FCG</a>
            </span>
        </div >
    )
}

export default AboutUs;