"use client"

import { Button } from "@/components/atoms/Button/page";
import Link from "next/link";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/atoms/cards/page";
import DeleteGame from "@/components/molecules/deleteButton/deleteGame/page";
import EditGame from "@/components/molecules/editButton/editGame/page";
import useGameStore from "@/store/gameStore";

type Props = {
    id:number,
    gameName:string;
};

function getData():Props[]{
    return[
        {
            id:1,
            gameName:"duel1",
        },
        {
            id:2,
            gameName:"duel2"
        },
    ]
}


function Gamecard(){
    const game = useGameStore((state) => state.game);
    const selectGame = useGameStore((state) => state.selectGame);
    const data =  getData()

    return(
        <div className="flex m-2 gap-3">
        {data.map((name:Props)=>(
            <Card key={name.id} className="w-full max-w-sm gap-3s">
            <CardHeader>
                <CardTitle>
                        <Button variant="link"onClick={()=>selectGame(name.gameName)}>
                            <Link href="/test">{name.gameName}</Link>
                        </Button>
                </CardTitle>
            </CardHeader>
            <CardFooter className="flex-col gap-2">
                    <EditGame editName={name.gameName}/>
                    <DeleteGame deleteName={name.gameName}/>
            </CardFooter>
        </Card>
        ))}
        </div>
    )
}

export default Gamecard