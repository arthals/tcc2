export class Address {
    public street: string;
    public number: number;
    public neighbourhood: string;
    public city: string;
    public state: string;
}

export class AddressRegisterCommand {
    public street: string;
    public number: number;
    public neighbourhood: string;
    public city: string;
    public state: string;

    constructor(address: Address) {
        this.street = address.street;
        this.number = address.number;
        this.neighbourhood = address.neighbourhood;
        this.city = address.city;
        this.number = address.number;
        this.state = address.state;
    }
}

export enum State {
    'Acre' = 1,
    'Alagoas' = 2,
    'Amapá' = 3,
    'Amazonas' = 4,
    'Bahia' = 5,
    'Ceará' = 6,
    'Distrito Federal' = 7,
    'Espírito Santo' = 8,
    'Goiás' = 9,
    'Maranhão' = 10,
    'Mato Grosso' = 11,
    'Mato Grosso do Sul' = 12,
    'Minas Gerais' = 13,
    'Pará' = 14,
    'Paraíba' = 15,
    'Paraná' = 16,
    'Pernambuco' = 17,
    'Piauí' = 18,
    'Rio de Janeiro' = 19,
    'Rio Grande do Norte' = 20,
    'Rio Grande do Sul' = 21,
    'Rondônia' = 22,
    'Roraima' = 23,
    'Santa Catarina' = 24,
    'São Paulo' = 25,
    'Sergipe' = 26,
    'Tocantins' = 27,
}
