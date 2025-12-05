import { create } from "zustand";

type State = {
    game:string,
}
type Action = {
    selectGame:(game:State["game"]) => void
}

const useGameStore = create<State & Action>((set)=>({
    game:"",
    selectGame: (game) => set(() => ({game:game}))
}))

export default useGameStore