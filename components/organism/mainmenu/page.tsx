import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/atoms/tabs/page";
import Gamerecord from "@/components/molecules/gamerecord/page";
import Addbuttle from "@/components/molecules/addButton/addButtle/page";
import Adddeck from "@/components/molecules/addButton/addDeck/page";
import Deckcard from "@/components/organism/deckcard/page";
import DemoPage from "@/components/atoms/data-table/page";

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
            <TabsContent value="統計"></TabsContent>
            <TabsContent value="デッキ">
                <Adddeck/>
                <Deckcard name="deck1" memo="このデッキは..."/>
            </TabsContent>
        </Tabs>
    )
}

export default Mainmenu