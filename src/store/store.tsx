import { create } from "zustand";


export interface Character {
    id: string;
    name: string;
    age: number;
    gender: string;
    rank: string;
    affiliation: string;
    abilities: string[];
}

export interface Store {
    characters: string[];
    addCharacter: (character: Character) => void;

    set: (store: Partial<Store>) => void;
}

export const useStore = create<Partial<Store>>((set) => ({
    characters: [],
    set: (store) => set(store),
}));