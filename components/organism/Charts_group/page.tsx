import FirstRate from "@/components/molecules/pieCharts/firstRate/page"
import WinRate from "@/components/molecules/pieCharts/winRate/page"
import Mydecks from "@/components/molecules/pieCharts/mydecks/page"
import OpponentDecks from "@/components/molecules/pieCharts/opponent'sDecks/page"

function ChartsGroup(){
    return(
        <div className="flex flex-wrap">
            <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
                <Mydecks/>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
                <OpponentDecks/>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
                <FirstRate/>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 p-2">
                <WinRate/>
            </div>
        </div>

    )
}

export default ChartsGroup