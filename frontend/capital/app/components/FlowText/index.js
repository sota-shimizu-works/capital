import style from "./style.module.scss"

export default function FlowText({ position }) {

    const wrapClassName = position == "right" ? `${style.wrap} ${style.right}` : `${style.wrap} ${style.left}`

    return (
        <>
            <div className={wrapClassName}>
                <div className={style.innerWrap}>
                    <ul>
                        <li>悪い奴は　よく眠る。悪い奴は　よく眠る。悪い奴は　よく眠る。悪い奴は　よく眠る。悪い奴は　よく眠る。悪い奴は　よく眠る。悪い奴は　よく眠る。</li>
                        <li>悪い奴は　よく眠る。悪い奴は　よく眠る。悪い奴は　よく眠る。悪い奴は　よく眠る。悪い奴は　よく眠る。悪い奴は　よく眠る。悪い奴は　よく眠る。</li>
                        <li>悪い奴は　よく眠る。悪い奴は　よく眠る。悪い奴は　よく眠る。悪い奴は　よく眠る。悪い奴は　よく眠る。悪い奴は　よく眠る。悪い奴は　よく眠る。</li>
                    </ul>
                </div>
            </div>
        </>
    )
}