import Link from "next/link"
import style from "./style.module.scss"

export default function ImageCard({ rightImageUrl, leftImageUrl, centerImageUrl, id, type }) {

    const link = `/${type}/${id}`

    return (
        <>
            <div className={style.wrap}>
                <div className={style.left}>
                    <img src={leftImageUrl} />
                </div>
                <div className={style.center}>
                    <Link href={link}>
                        <img src={centerImageUrl} />
                    </Link>
                </div>
                <div className={style.right}>
                    <img src={rightImageUrl} />
                </div>
            </div>
        </>
    )
}