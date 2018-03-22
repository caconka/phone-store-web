export class Phone {
    id: string;
    brand: string;
    name: string;
    image?: string;
    specs: Array<string> = new Array();

    public asFormData(): FormData {
        const data = new FormData();
        data.append('brand', this.brand);
        data.append('name', this.name);
        for (let spec of this.specs) {
            data.append('specs', spec);
        }
        data.append('image', this.image);

        return data;
    }
}
