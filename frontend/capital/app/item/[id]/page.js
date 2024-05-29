import Flame from "@/app/components/Flame";
import ItemCard from "@/app/components/ItemCard";
import style from "@/app/item/style.module.scss"

async function getItem(id) {
    const res = await fetch(`https://ltwiqi7z0s.microcms.io/api/v1/items/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY
        },
        cache: "no-store",
    })

    return res.json()
}

export default async function Item({ params }) {

    const item = await getItem(params.id)

    return (
        <>
            <Flame>
                <div className="mandatory">

                    <ItemCard recommend_display={item.recommend_display} recommend_items={item.recommend_items} category={item.category} >

                        <div className={style.wrap}>

                            <div className={style.images}>
                                {item.images.length > 0 && item.images.map((image, index) => {
                                    return <img src={image.url} width={image.width} height={image.height} key={index} />
                                })}
                            </div>

                            <div className={style.datail}>
                                <h2>{item.name}</h2>
                                <p className={style.subTitle}>{item.short_description && item.short_description}</p>

                                <h3>PRODUCT DETAILS</h3>
                                <p className={style.description}>
                                    {item.description && item.description}
                                </p>


                                <div className={style.price}>
                                    <p className={style.unit}>
                                        {item.price && item.price}
                                    </p>

                                    {item.link && (
                                        <>
                                            <a href={item.link} target="_blank" className={style.link}>
                                                <span>{item.link_text ? item.link_text : 'BUY NOW'}</span>
                                            </a>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>

                    </ItemCard>

                </div>
            </Flame>
        </>
    )
}