import style from '@/app/components/GlobalNavigation/style.module.scss'
import Link from 'next/link'

export default function GlobalNavigation({ searchParams }) {
    const category = searchParams.category ? searchParams.category : false
    console.log(searchParams.category)

    return (
        <>
            <div className={style.wrap}>

                <Link href="/?category=event">
                    <div className={category === 'event' ? `${style.button} ${style.active}` : `${style.button}`}>
                        <div className={style.inner}>
                            <div className={style.object}>
                                <span>EVENT</span>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link href="/?category=eat">
                    <div className={category === 'eat' ? `${style.button} ${style.active}` : `${style.button}`}>
                        <div className={style.inner}>
                            <div className={style.object}>
                                <span>EAT</span>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link href="/">
                    <div className={category === false ? `${style.button} ${style.active}` : `${style.button}`}>
                        <div className={style.inner}>
                            <div className={style.object}>
                                <span>ALL</span>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link href="/?category=sound">
                    <div className={category === 'sound' ? `${style.button} ${style.active}` : `${style.button}`}>
                        <div className={style.inner}>
                            <div className={style.object}>
                                <span>SOUND</span>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link href="/?category=shop">
                    <div className={category === 'shop' ? `${style.button} ${style.active}` : `${style.button}`}>
                        <div className={style.inner}>
                            <div className={style.object}>
                                <span>SHOP</span>
                            </div>
                        </div>
                    </div>
                </Link>

            </div>
        </>
    )
}
