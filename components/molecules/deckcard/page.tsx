import { Button } from "@/components/atoms/Button/page";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/atoms/cards/page";
import EditDeck from "../editDeck/page";

type Props = {
    name:string
    memo:string
};

function Deckcard({name,memo}:Props){
    return(
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDescription>{memo}</CardDescription>
            </CardHeader>
            <CardFooter className="flex-col gap-2">
                <EditDeck editName={name} editMemo={memo}/>
                <Button variant="destructive" className="w-full bg-red-400 cursor-pointer">
                    削除
                </Button>
            </CardFooter>
        </Card>
    )
}

export default Deckcard