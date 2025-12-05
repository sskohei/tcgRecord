

import Header from "@/components/organism/header/page"
import Gamecard from "@/components/organism/gameCard/page"
import Addgame from "@/components/molecules/addButton/addGame/page"

function Page(){
    return(
        <div>
            <Header/>
            <Addgame/>
            <Gamecard />
        </div>
    )
}

export default Page