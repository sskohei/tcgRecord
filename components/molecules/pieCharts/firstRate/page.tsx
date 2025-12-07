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

function FirstRate(){
    return(
        <Card className="flex-1 ">
            <CardHeader>
                <CardTitle>先行・後攻の割合</CardTitle>
            </CardHeader>
            <CardContent>
                <SimplePieChart/>
            </CardContent>
        </Card>
    )
}

export default FirstRate