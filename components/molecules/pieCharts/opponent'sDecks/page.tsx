import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/atoms/cards/page";
import { SimplePieChart } from "@/components/atoms/charts/pieCharts/page";

function OpponentDecks(){
    return(
        <Card className="flex-1">
            <CardHeader>
                <CardTitle>対戦相手のデッキ</CardTitle>
            </CardHeader>
            <CardContent className="flex">
                <SimplePieChart/>
            </CardContent>
        </Card>
    )
}

export default OpponentDecks