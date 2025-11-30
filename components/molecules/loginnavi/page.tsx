import { Button } from "@/components/atoms/Button/page"
import Link from "next/link"

function Loginnavi(){
    return(
        <nav className="hidden sm:flex items-center gap-3" aria-label="メインナビゲーション">
            <Button asChild>
                <Link href="/login">ログイン</Link>
            </Button>
            <Button>
                <Link href="/signup">新規登録</Link>
            </Button>
            <Button>
                <Link href="/test">テスト</Link>
            </Button>
        </nav>
    )
}

export default Loginnavi