import style from '@/app/components/ReccomendCard/style.module.scss'
import Link from 'next/link'

export default function ReccomendCard({ category, imageUrl, title, description, link }) {
    return (
        <>
            <div className={style.wrap}>
                <div className={style.inner}>
                    <div className={style.head}>
                        <p>{category}</p>
                    </div>
                    <div className={style.image}>
                        <img src={imageUrl} />
                    </div>
                    <div className={style.datail}>
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                    <Link href={link} className={style.link}>
                        <span>MORE</span>
                    </Link>
                </div>
            </div>
        </>
    )
}