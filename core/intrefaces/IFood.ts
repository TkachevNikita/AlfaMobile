export interface IFood {
    id?: string;
    name: string;
    description: string;
    images: string[];
    categories: {
        id: string;
        name: string | null
    }[]
    existingCount: number;
}