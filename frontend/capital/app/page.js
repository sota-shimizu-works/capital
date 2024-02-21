import Image from "next/image";
import style from "./page.module.scss";
import ImageCard from "@/app/components/ImageCard";
import Flame from "@/app/components/Flame";

export default function Home() {
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

        <Flame>
          <div className="mandatory">
            <ImageCard
              rightImageUrl="https://img.lovepik.com/background/20211030/medium/lovepik-cool-technology-blue-background-image_400378476.jpg"
              leftImageUrl="https://pics.prcm.jp/1db5cb0b13286/85357914/jpeg/85357914_358x636.jpeg"
              centerImageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png"
              id="1"
              type="test"
            />

            <ImageCard
              rightImageUrl="https://img.lovepik.com/background/20211030/medium/lovepik-cool-technology-blue-background-image_400378476.jpg"
              leftImageUrl="https://pics.prcm.jp/1db5cb0b13286/85357914/jpeg/85357914_358x636.jpeg"
              centerImageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png"
              id="1"
              type="test"
            />

            <ImageCard
              rightImageUrl="https://img.lovepik.com/background/20211030/medium/lovepik-cool-technology-blue-background-image_400378476.jpg"
              leftImageUrl="https://pics.prcm.jp/1db5cb0b13286/85357914/jpeg/85357914_358x636.jpeg"
              centerImageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png"
              id="1"
              type="test"
            />

            <ImageCard
              rightImageUrl="https://img.lovepik.com/background/20211030/medium/lovepik-cool-technology-blue-background-image_400378476.jpg"
              leftImageUrl="https://pics.prcm.jp/1db5cb0b13286/85357914/jpeg/85357914_358x636.jpeg"
              centerImageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png"
              id="1"
              type="test"
            />
          </div>
        </Flame>
      </div>
    </>
  );
}
