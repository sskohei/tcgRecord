"use client"
import { useState } from "react";
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
import { Settings } from "lucide-react";
import { Button } from "@/components/atoms/Button/page";
import { Label } from "@/components/atoms/label/page";
import Switch from "@/components/atoms/Switch/page";


function SettingButton(){
    const [mydeck,setMydeck] = useState<boolean>(false);
    const [oppenent,setOppnent] = useState<boolean>(false);

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
            <SheetTrigger>
                <Button variant="outline" className="cursor-pointer">
                    設定
                </Button>
            </SheetTrigger>
            <SheetContent className="bg-slate-950 text-slate-50 flex flex-col h-full">
                <SheetHeader>
                    <SheetTitle>詳細設定</SheetTitle>
                </SheetHeader>
                <div className="flex-1 overflow-y-auto grid auto-rows-min gap-6 px-4 py-4">
                    <div className="flex">
                        <Switch 
                         initialChecked = {mydeck} 
                         onCheckedChange={setMydeck}/>
                        <Label>使用デッキの固定</Label>
                    </div>
                    {mydeck && (
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
                    )}

                    <div className="flex">
                        <Switch 
                         initialChecked = {oppenent} 
                         onCheckedChange={setOppnent}/>
                        <Label>相手のデッキの固定</Label>
                    </div>
                    {oppenent && (
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
                    )}
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default SettingButton