import { Button } from "@/components/atoms/Button/page"
import { Input } from "@/components/atoms/input/page"
import { Label } from "@/components/atoms/label/page"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/atoms/radioGroup/page"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/atoms/sheet/page";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/atoms/select/page"

function Addbuttle(){
    const decks = [
        {name:"deck1",
         battle_id:1   
        },
        {name:"deck2",
         battle_id:2
        }
    ]
    return(
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" className="cursor-pointer m-3">
                    対戦結果を追加
                </Button>
            </SheetTrigger>
            <SheetContent className="bg-slate-950 text-slate-50 flex flex-col h-full">
                <SheetHeader className="px-4 pt-4">
                    <SheetTitle>対戦結果を入力</SheetTitle>
                    <SheetDescription>
                        行った対戦の内容を入力してください
                    </SheetDescription>
                </SheetHeader>

                {/* ← スクロール可能にする重要ポイント */}
                <div className="flex-1 overflow-y-auto grid auto-rows-min gap-6 px-4 py-4">
                    <div className="grid gap-3">
                        <Label>先行/後攻</Label>
                        <RadioGroup>
                            <div className="flex gap-3">
                                <RadioGroupItem value="first" id="r1" className="data-[state=checked]:bg-white"/>
                                <Label htmlFor="r1">先行</Label>
                            </div>
                            <div className="flex gap-3">
                                <RadioGroupItem value="second" id="r2" className="data-[state=checked]:bg-white"/>
                                <Label htmlFor="r2">後攻</Label>
                            </div>
                        </RadioGroup>
                    </div>

                    <div className="grid gap-3">
                        <Label>勝敗</Label>
                        <RadioGroup>
                            <div className="flex gap-3">
                                <RadioGroupItem value="win" id="win" className="data-[state=checked]:bg-white"/>
                                <Label htmlFor="win">勝利</Label>
                            </div>
                            <div className="flex gap-3">
                                <RadioGroupItem value="lose" id="lose" className="data-[state=checked]:bg-white"/>
                                <Label htmlFor="lose">敗北</Label>
                            </div>
                        </RadioGroup>
                    </div>

                    <div className="grid gap-3">
                        <Label>使用デッキ</Label>
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="使用デッキを選択"/>
                            </SelectTrigger>
                            <SelectContent className="text-slate-950 bg-white">
                                <SelectGroup>
                                    <SelectLabel>使用デッキ</SelectLabel>
                                    {decks.map((deck)=>(
                                        <SelectItem key={deck.battle_id} value={deck.name}>{deck.name}</SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="grid gap-3">
                        <Label>相手のデッキ</Label>
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="相手のデッキを選択"/>
                            </SelectTrigger>
                            <SelectContent className="text-slate-950 bg-white">
                                <SelectGroup>
                                    <SelectLabel>相手のデッキ</SelectLabel>
                                    {decks.map((deck)=>(
                                        <SelectItem key={deck.battle_id} value={deck.name}>{deck.name}</SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* ← フッターは下部に固定される */}
                <SheetFooter className="p-4 border-t mt-auto">
                    <Button type="submit" variant="default" className="bg-white text-slate-950 cursor-pointer">
                        追加する
                    </Button>
                    <SheetClose asChild>
                        <Button variant="outline" className="cursor-pointer">閉じる</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

export default Addbuttle