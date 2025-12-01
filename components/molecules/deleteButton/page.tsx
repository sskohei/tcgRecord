import { Button } from "@/components/atoms/Button/page"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/atoms/dialog/page"
type Props = {
    deleteName:string
}

function DeleteButton({deleteName}:Props){
    return(
        <Dialog>
        <DialogTrigger asChild>
           <Button variant="destructive" className="w-full bg-red-400 cursor-pointer">
                削除
            </Button> 
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-slate-950 text-white">
                <DialogHeader>
                    <DialogTitle className="text-red-500">デッキの削除</DialogTitle>
                    <DialogDescription>
                        あなたは{deleteName}を削除しようとしています。これは取り消すことができない操作です。本当に削除してよろしいですか?
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button className="cursor-pointer">キャンセル</Button>
                    </DialogClose>
                    <Button type="submit" className="bg-red-400 cursor-pointer">削除する</Button>
                </DialogFooter>
            </DialogContent>
    </Dialog>
    )
}
export default DeleteButton;