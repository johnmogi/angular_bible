export class ItemModel {
    public constructor(
        public _id?: string,
        public name?: string,
        public price?: number,
        public imageFile?: string | File) { }
}