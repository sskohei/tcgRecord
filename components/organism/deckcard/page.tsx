
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/atoms/cards/page";
import EditDeck from "../../molecules/editButton/editDeck/page";
import DeleteDeck from "../../molecules/deleteButton/deleteDeck/page";

type Props = {
    id:number,
    deckName:string,
    memo:string,
};

function getData():Props[]{
    return[
        {
            id:1,
            deckName:"deck1",
            memo:"コントロール",
        },
        {
            id:2,
            deckName:"deck2",
            memo:"アグロ",
        },
    ]
}

function Deckcard(){
    const data = getData();

    return(
        <div className="flex m-2 gap-3">
        {data.map((deck:Props)=>(
            <Card key={deck.id} className="w-full max-w-sm gap-3s">
            <CardHeader>
                <CardTitle>{deck.deckName}</CardTitle>
                <CardDescription>{deck.memo}</CardDescription>
            </CardHeader>
            <CardFooter className="flex-col gap-2">
                <EditDeck editName={deck.deckName} editMemo={deck.memo}/>
                <DeleteDeck deleteName={deck.deckName}/>
            </CardFooter>
        </Card>
        ))}
        </div>
    )
}

export default Deckcard