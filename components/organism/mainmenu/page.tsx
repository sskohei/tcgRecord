import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/atoms/tabs/page";
import Gamerecord from "@/components/molecules/gamerecord/page";

function Mainmenu(){
    return(
        <Tabs defaultValue="対戦履歴">
            <TabsList>
                <TabsTrigger value="対戦履歴">対戦履歴</TabsTrigger>
                <TabsTrigger value="統計">統計</TabsTrigger>
            </TabsList>
            <TabsContent value="対戦履歴">
                <Gamerecord/>
            </TabsContent>
            <TabsContent value="統計"></TabsContent>
        </Tabs>
    )
}

export default Mainmenu