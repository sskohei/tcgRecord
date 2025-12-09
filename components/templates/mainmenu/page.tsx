import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/atoms/tabs/page";
import Gamerecord from "@/components/organism/gameLogsTable/page";
import Addbuttle from "@/components/molecules/addButton/addButtle/page";
import Adddeck from "@/components/molecules/addButton/addDeck/page";
import Deckcard from "@/components/organism/deckcard/page";
import TagsButtle from "../../organism/Tags_Buttle/page";
import ChartsGroup from "@/components/organism/Charts_group/page";

function Mainmenu(){
    return(
        <Tabs defaultValue="対戦履歴">
            <TabsList>
                <TabsTrigger value="対戦履歴">対戦履歴</TabsTrigger>    
                <TabsTrigger value="統計">統計※開発中</TabsTrigger>
                <TabsTrigger value="デッキ">デッキ</TabsTrigger>
            </TabsList>
            <TabsContent value="対戦履歴">
                <Addbuttle/>
                <Gamerecord/>
            </TabsContent>
            <TabsContent value="統計">
                <ChartsGroup/>
            </TabsContent>
            <TabsContent value="デッキ">
                <Adddeck/>
                <Deckcard/>
            </TabsContent>
        </Tabs>
    )
}

export default Mainmenu