import Image from "next/image";
import style from "./page.module.scss";
import ImageCard from "@/app/components/ImageCard";
import Flame from "@/app/components/Flame";
import EndCard from "@/app/components/EndCard";

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
              rightImageUrl="/test/1-1.png"
              leftImageUrl="/test/1-3.png"
              centerImageUrl="/test/1-2.jpg"
              id="1"
              type="test"
              title="KidNapClub Tee"
              description="1st  signature model Tee is
              available now. "
              category="PRODUCT"
            />

            <ImageCard
              rightImageUrl="/test/2-1.png"
              leftImageUrl="/test/2-3.png"
              centerImageUrl="/test/2-2.jpg"
              id="1"
              type="test"
              title="Custom Birkin Bag"
              description={`Customizing Hermes's birkin bag by 
              CAPITAL designers.`}
              category="PRODUCT"
            />

            <ImageCard
              rightImageUrl="/test/3-1.png"
              leftImageUrl="/test/3-3.png"
              centerImageUrl="/test/3-2.jpg"
              id="1"
              type="test"
              title="MU 40th anniversary Mag"
              description="CAPITAL x MU 40th anniversary mag
              is now available."
              category="PRODUCT"
            />

            <EndCard />
          </div>
        </Flame>
      </div>
    </>
  );
}
