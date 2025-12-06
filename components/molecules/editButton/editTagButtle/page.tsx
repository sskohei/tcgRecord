import { Label } from "@/components/atoms/label/page";
import { Button } from "@/components/atoms/Button/page";
import { Input } from "@/components/atoms/input/page";
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

type Props={
    editName:string
}

function EditTagButtle({editName}:Props){
    return(
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" className="w-full cursor-pointer">
                    編集
                </Button>
            </SheetTrigger>
            <SheetContent className="bg-slate-950 text-slate-50">
                <SheetHeader>
                    <SheetTitle>対戦タグを編集する</SheetTitle>
                </SheetHeader>
                <div className="grid flex-1 auto-rows-min gap-6 px-4">
                    <div className="grid gap-3">
                        <Label htmlFor="sheet-demo-name">対戦タグ</Label>
                        <Input id="sheet-demo-name" defaultValue={editName} />
                    </div>
                </div>
                <SheetFooter>
                    <Button type="submit" variant="default" className="bg-white text-slate-950 cursor-pointer">
                        編集する
                    </Button>
                    <SheetClose asChild>
                        <Button variant="outline" className="cursor-pointer">
                            閉じる
                        </Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

export default EditTagButtle