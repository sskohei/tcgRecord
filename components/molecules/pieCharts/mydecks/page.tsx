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

function Mydecks(){
    return(
        <Card className="flex-1 ">
            <CardHeader>
                <CardTitle>使用デッキ</CardTitle>
            </CardHeader>
            <CardContent>
                <SimplePieChart/>
            </CardContent>
        </Card>
    )
}

export default Mydecks