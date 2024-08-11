import { create } from "zustand";


export interface Character {
    id: string;
    name: string;
    age: number;
    gender: string;
    rank: string;
    affiliation: string;
    abilities: string[];
    image?: string
}

export interface Store {
    characters: Character[];
    addCharacter: (character: Character) => void;
    deleteCharacter: (id: string) => void;

    set: (store: Partial<Store>) => void;
}

export const useStore = create<Partial<Store>>((set) => ({
    characters: [
        {
            id: "1",
            name: "Eren Jaegar",
            age: 19,
            gender: "male",
            rank: "A+",
            affiliation: "N/A",
            abilities: [
                "titan shifter", "Freedom Fighter"
            ],
            image: "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/01/Eren-Jaeger-in-Attack-on-Titan.jpg"
        }
    ],
    deleteCharacter: (id: string) => set((store) => ({
        characters: store?.characters?.filter((char) => char.id !== id)
    })),
    addCharacter: (character: Character) => set((store) => ({
        characters: store?.characters?.concat({ ...character, id: `${store?.characters?.length + 1}` })
    })),

    set: (store) => set(store),
}));