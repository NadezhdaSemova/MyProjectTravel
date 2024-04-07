export class Places {
    _id?: string;
    place!: string;
    description!: string;
    imgUrl!: string;
    likes!: string[];
    ownerId?: string;
}

export interface Like {
    likes: string[];
}
