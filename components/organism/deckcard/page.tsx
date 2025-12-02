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
import EditDeck from "../../molecules/editDeck/page";
import DeleteButton from "../../molecules/deleteButton/page";

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
                <DeleteButton deleteName={name}/>
            </CardFooter>
        </Card>
    )
}

export default Deckcard