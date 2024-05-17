export interface IRestaurant {
    id: string;
    address: string;
    title: string;
    externalContent: ExternalContent[];
    reviews: {
        generalRating: number;
        generalCount: number;
    };
    rubrics: Rubrics[]
}

type ExternalContent = {
    mainPhotoUrl: string;
}

type Rubrics = {
    name: string;
}