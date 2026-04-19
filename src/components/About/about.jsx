import aboutImg1 from "../../assets/img/about_img1.png"
import aboutImg2 from "../../assets/img/about_img2.png"
import aboutImg3 from "../../assets/img/about_img3.png"

export default function About() {
    return(
        <section className="px-40 py-24 bg-white mb-12">
            <div className="flex items-center justify-between">
                <div className="max-w-xl">
                <p className="font-medium text-[14px] leading-[143%] tracking-[0.21em] uppercase text-black mb-4">ABOUT US</p>
                <h2 className="font-semibold text-[48px] leading-[121%] text-[#232536]">The company leads entire webdesign process from concept to delivery.</h2>
            </div>

            <div className="max-w-xl">
                <h3 className="font-semibold text-[36px] leading-[150%] text-[#232536] mb-4">The Era Of Technology.</h3>
                <p className="font-normal text-[16px] leading-[150%] text-[#5d5f6d]">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. </p>
            </div>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-12 mb-12 relative">
                <img src={aboutImg1} alt="meeting" />
                <img src={aboutImg2} alt="meeting" />
                <img src={aboutImg3} alt="meeting" />
            </div>
        </section>
    )
}