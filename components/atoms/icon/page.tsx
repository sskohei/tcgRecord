import Link from "next/link"

function Icon(){
    return(
        <Link href="/" className="flex items-center gap-3 no-underline">
            <span className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-600 flex items-center justify-center font-bold">
                P
            </span>
            <div className="leading-tight">
            <div className="text-sm font-semibold">カードゲーム戦績管理</div>
            </div>
        </Link>
    )
}

export default Icon