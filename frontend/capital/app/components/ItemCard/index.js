import Link from "next/link"
import style from "@/app/components/ImageCard/style.module.scss"
import Itemstyle from "@/app/components/ItemCard/style.module.scss"
import ReccomendCard from "@/app/components/ReccomendCard"
import EndCard from "@/app/components/EndCard"


export default function ItemCard({ children, recommend_display, recommend_items }) {

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
                                {recommend_display && (
                                    <>
                                        {recommend_items.length > 0 && recommend_items.map((recommend, index) => {
                                            return (
                                                <ReccomendCard
                                                    category={recommend.category.name}
                                                    imageUrl={recommend.center_image.url}
                                                    title={recommend.name}
                                                    description={recommend.short_description}
                                                    link={`/item/${recommend.id}`}
                                                />
                                            )
                                        })}
                                    </>
                                )}
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