import Image from "next/image"
import style from "./style.module.scss"

export default function SideImage({ position }) {

    const wrapClassName = position == "right" ? `${style.wrap} ${style.right}` : `${style.wrap} ${style.left}`

    return (
        <>
            <div className={wrapClassName}>
                <Image src="/side_image.png" width="125" height="1017" />
            </div>
        </>
    )
}