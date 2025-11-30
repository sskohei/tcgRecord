'use client'

import Link from "next/link";
import { useState } from "react";
import Loginnavi from "@/components/molecules/loginnavi/page";
import Icon from "@/components/atoms/icon/page";

function Header(){
    const [open,setOpen] = useState<boolean>(false);
    
    return(
    <header className="bg-slate-50 text-slate-900 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Icon/>

          <Loginnavi/>

          {/* モバイルメニュー開閉ボタン */}
          <button
            onClick={() => setOpen(!open)}
            className="sm:hidden inline-flex items-center justify-center p-2 rounded-md focus:ring-2 focus:ring-cyan-300"
            aria-expanded={open}
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* モバイルメニュー */}
      {open && (
        <div className="sm:hidden px-4 pt-2 pb-4 space-y-1">
          <Link
            href="/login"
            className="block px-3 py-2 rounded-md text-base font-medium border border-white/10"
          >
            ログイン
          </Link>
          <Link
            href="/signup"
            className="block px-3 py-2 rounded-md text-base font-semibold bg-cyan-400 text-slate-900"
          >
            新規登録
          </Link>
        </div>
      )}
    </header>
    )
}

export default Header