export interface Chemical {
    name: string;
    formula: string;
    weight: string;
    barcode: string;
}

export interface Transaction {
    id: string;
    date: string;
    user: string;
    items: Chemical[];
}