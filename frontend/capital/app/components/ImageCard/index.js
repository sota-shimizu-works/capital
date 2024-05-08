import Link from "next/link"
import style from "./style.module.scss"

export default function ImageCard({ rightImageUrl, leftImageUrl, centerImageUrl, id, type, title, description, category }) {

    const link = `/${type}/${id}`

    return (
        <>
            <div className={style.wrap}>
                <div className={style.left}>
                    <img src={leftImageUrl} />
                </div>
                <div className={style.center}>
                    <div className={style.inner}>
                        <div className={style.head}>
                            <p>{category}</p>
                        </div>
                        <div className={style.image}>
                            <img src={centerImageUrl} />
                        </div>
                        <div className={style.datail}>
                            <h2>{title}</h2>
                            <p>{description}</p>
                        </div>
                        <Link href="/item" className={style.link}>
                            <span>MORE</span>
                        </Link>
                    </div>
                </div>
                <div className={style.right}>
                    <img src={rightImageUrl} />
                </div>
            </div>
        </>
    )
}