import Flame from "@/app/components/Flame";
import ItemCard from "@/app/components/ItemCard";
import style from "@/app/item/style.module.scss"
import Image from "next/image";

export default function Item() {
    return (
        <>
            <Flame>
                <div className="mandatory">

                    <ItemCard>

                        <div className={style.wrap}>

                            <div className={style.images}>
                                <Image src="/test/item1.jpg" width={546} height={3966} />
                            </div>

                            <div className={style.datail}>
                                <h2>Custom Birkin Bag</h2>
                                <p className={style.subTitle}>Hermes birkin bag by CAPITAL designers.</p>

                                <h3>PRODUCT DETAILS</h3>
                                <p className={style.description}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor in cididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.
                                </p>


                                <div className={style.price}>
                                    <p className={style.unit}>
                                        128,000 yen
                                    </p>

                                    <a href="" className={style.link}>
                                        <span>BUY NOW</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </ItemCard>

                </div>
            </Flame>
        </>
    )
}