import FlowText from "@/app/components/FlowText"
import SideImage from "@/app/components/SideImage"

export default function Flame({ children }) {
    return (
        <>
            <div className="display">
                <div className="board outer">
                    <div className="board inner">

                        <FlowText position="right" />
                        <SideImage position="right" />

                        <FlowText position="left" />
                        <SideImage position="left" />

                        <div className="content-wrap">
                            {children}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}