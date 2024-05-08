import style from '@/app/components/GlobalNavigation/style.module.scss'
import Event from '@/app/components/Icons/Event'
import Eat from '@/app/components/Icons/Eat'
import All from '@/app/components/Icons/All'
import Sound from '@/app/components/Icons/Sound'
import Shop from '@/app/components/Icons/Shop'
import Link from 'next/link'

export default function GlobalNavigation() {
    return (
        <>
            <div className={style.wrap}>

                <Link href="">
                    <div className={style.button}>
                        <div className={style.inner}>
                            <div className={style.object}>
                                <Event />
                                <span>EVENT</span>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link href="">
                    <div className={style.button}>
                        <div className={style.inner}>
                            <div className={style.object}>
                                <Eat />
                                <span>EAT</span>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link href="">
                    <div className={`${style.button} ${style.active}`}>
                        <div className={style.inner}>
                            <div className={style.object}>
                                <All />
                                <span>ALL</span>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link href="">
                    <div className={style.button}>
                        <div className={style.inner}>
                            <div className={style.object}>
                                <Sound />
                                <span>SOUND</span>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link href="">
                    <div className={style.button}>
                        <div className={style.inner}>
                            <div className={style.object}>
                                <Shop />
                                <span>SHOP</span>
                            </div>
                        </div>
                    </div>
                </Link>

            </div>
        </>
    )
}
