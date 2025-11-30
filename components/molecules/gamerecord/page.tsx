import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/atoms/table/page"

function Gamerecord(){
    return(
        <Table>
            <TableCaption></TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">日付</TableHead>
                    <TableHead>使用デッキ</TableHead>
                    <TableHead>相手のデッキ</TableHead>
                    <TableHead>先後</TableHead>
                    <TableHead>勝敗</TableHead>
                </TableRow>
            </TableHeader>
        </Table>
    )
}

export default Gamerecord