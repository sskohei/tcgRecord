"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: number
  date:string
  mydeck:string
  opponent:string
  first:string
  result:string
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "date",
    header: "日付",
  },
  {
    accessorKey: "mydeck",
    header: "使用デッキ",
  },
  {
    accessorKey: "opponent",
    header: "相手のデッキ",
  },
  {
    accessorKey:"first",
    header:"先後",
  },
  {
    accessorKey:"result",
    header:"勝敗",
  },
]