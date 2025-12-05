'use client';

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
import EditDeck from "../../molecules/editButton/editDeck/page";
import DeleteDeck from "../../molecules/deleteButton/deleteDeck/page";

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
                <DeleteDeck deleteName={name}/>
            </CardFooter>
        </Card>
    )
}

export default Deckcard