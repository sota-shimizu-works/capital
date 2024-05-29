import Image from "next/image";
import style from "./page.module.scss";
import ImageCard from "@/app/components/ImageCard";
import Flame from "@/app/components/Flame";
import EndCard from "@/app/components/EndCard";

export const metadata = {
  title: 'CAPITAL',
}

async function getItems(searchParams) {
  const category = searchParams.category ? searchParams.category : false

  if (category == false) {
    const res = await fetch('https://ltwiqi7z0s.microcms.io/api/v1/items', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY
      },
      cache: "no-store",
    })

    return res.json()
  } else {
    const categories = {
      'shop': '4z8dhygzwlr',
      'sound': '9l1a6jpxs',
      'eat': 'vnj8c8b4pw',
      'event': 'h-zvi_x8v'
    }
    const params = { filters: `category[equals]${categories[category]}` }
    const query = new URLSearchParams(params)


    const res = await fetch(`https://ltwiqi7z0s.microcms.io/api/v1/items?${query}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY
      },
      cache: "no-store",
    })

    return res.json()

  }
}

export default async function Home({ searchParams }) {
  const items = await getItems(searchParams)

  return (
    <>
      <div className={style.home}>
        <div className={style.mainVisual}>
          <div className={style.imageDoor}>

            <div className={style.right}>
              <Image src="/mv_r.png" width={617} height={1080} />
            </div>
            <div className={style.center}></div>
            <div className={style.left}>
              <Image src="/mv_l.png" width={617} height={1080} />
            </div>
          </div>

          <div className={style.logo}>
            <Image src="/main-visual-logo.png" width={1453} height={494.5} />
          </div>
        </div>

        <Flame searchParams={searchParams}>
          <div className="mandatory">
            {items.contents.length > 0 && items.contents.map((item, index) => {
              return <ImageCard
                rightImageUrl={item.right_image.url}
                leftImageUrl={item.left_image.url}
                centerImageUrl={item.center_image.url}
                id={item.id}
                type={item.category.slug}
                title={item.name}
                description={item.short_description}
                category={item.category.name}
                key={item.id}
              />
            })}
            <EndCard />
          </div>
        </Flame>
      </div>
    </>
  );
}
