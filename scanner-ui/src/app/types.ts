export interface Chemical {
    name: string;
    barcode: string;
}

export interface Transaction {
    id: string;
    date: string;
    user: string;
    items: Chemical[];
}

export interface User {
    id: string;
    name: string;
}