import Link from "next/link"
import style from "@/app/components/ImageCard/style.module.scss"

export default function EndCard({ noSide = false }) {

    const wrapClass = noSide ? `${style.wrap} ${style.noSide}` : style.wrap

    return (
        <>
            <div className={wrapClass}>
                <div className={style.left}>
                    <img src="/back-side.png" />
                </div>
                <div className={style.center}>
                    <div className={style.inner}>
                        <div className={style.endCard}>
                            <p className={style.first}>
                                THE <br />
                                DEEPEST<br />
                                PLACE<br />
                                OF<br />
                                THIS<br />
                                WEBSITE
                            </p>
                            <p className={style.second}>
                                GO<br />
                                BACK<br />
                                HOME
                            </p>
                        </div>
                        <Link href="/" className={style.link}>
                            <span>HOME</span>
                        </Link>
                    </div>
                </div>
                <div className={style.right}>
                    <img src="/back-side.png" />
                </div>
            </div>
        </>
    )
}