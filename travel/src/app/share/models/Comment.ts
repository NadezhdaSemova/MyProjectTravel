export interface Comment {
    _id?: string;
    email: string;
    comment: string;
    placeId: string;
    ownerId?: string;
    _created_at?: string;
}