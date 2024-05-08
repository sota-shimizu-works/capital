import Link from "next/link"
import style from "@/app/components/ImageCard/style.module.scss"
import Itemstyle from "@/app/components/ItemCard/style.module.scss"
import ReccomendCard from "@/app/components/ReccomendCard"
import EndCard from "@/app/components/EndCard"

export default function ItemCard({ children }) {
    return (
        <>
            <div className={style.wrap}>
                <div className={style.left}>
                    <img src="/back-side.png" />
                </div>
                <div className={style.center}>
                    <div className={style.inner}>
                        <div className={Itemstyle.wrap}>
                            {children}

                            <div className={Itemstyle.reccomendWrap}>
                                <ReccomendCard
                                    category="PRODUCT"
                                    imageUrl="/test/1-2.jpg"
                                    title="KidNapClub Tee"
                                    description="1st  signature model Tee is
                                    available now. "
                                    link=""
                                />
                                <ReccomendCard
                                    category="PRODUCT"
                                    imageUrl="/test/1-2.jpg"
                                    title="KidNapClub Tee"
                                    description="1st  signature model Tee is
                                    available now. "
                                    link=""
                                />
                            </div>

                            <EndCard noSide={true} />
                        </div>
                    </div>
                </div>
                <div className={style.right}>
                    <img src="/back-side.png" />
                </div>
            </div>
        </>
    )
}