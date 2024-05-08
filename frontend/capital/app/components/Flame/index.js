import FlowText from "@/app/components/FlowText"
import SideImage from "@/app/components/SideImage"
import GlobalNavigation from "@/app/components/GlobalNavigation"
import Image from "next/image"
import style from "@/app/components/Flame/style.module.scss"
import Link from "next/link"

export default function Flame({ children }) {
    return (
        <>
            <div className="display">

                <div className={style.head}>
                    <Link href="/" className={style.link}>
                        <span>HOME</span>
                    </Link>
                    <Image src="/logo_mini.png" className={style.logo} width={240} height={85} />
                    <div className={style.humb}>Humbergar</div>
                </div>

                <div className="board outer">

                    <div className="board inner">

                        <Image className={style.bg} src="/bg.jpg" width={578} height={1028} />

                        <FlowText position="right" />
                        <SideImage position="right" />

                        <FlowText position="left" />
                        <SideImage position="left" />

                        <div className="content-wrap">
                            {children}
                        </div>

                    </div>
                </div>

                <GlobalNavigation />
            </div>
        </>
    )
}