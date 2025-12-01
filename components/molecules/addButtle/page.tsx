import { Button } from "@/components/atoms/Button/page"
import { Input } from "@/components/atoms/input/page"
import { Label } from "@/components/atoms/label/page"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/atoms/sheet/page"

//データベースに登録する処理を書く
function Addbuttle(){
    return(
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" className="cursor-pointer">
                    対戦結果を追加
                </Button>
            </SheetTrigger>
            <SheetContent className="bg-slate-950 text-slate-50">
                <SheetHeader>
                    <SheetTitle>対戦結果を入力</SheetTitle>
                    <SheetDescription>行った対戦の内容を入力してください</SheetDescription>
                </SheetHeader>
                <div className="grid flex-1 auto-rows-min gap-6 px-4">
                    <div className="grid gap-3">
                        <Label htmlFor="sheet-demo-name">Name</Label>
                        <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="sheet-demo-username">Username</Label>
                        <Input id="sheet-demo-username" defaultValue="@peduarte" />
                    </div>
                </div>
                <SheetFooter>
                    <Button type="submit" variant="default" className="bg-white text-slate-950">追加する</Button>
                    <SheetClose asChild>
                        <Button variant="outline">閉じる</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

export default Addbuttle