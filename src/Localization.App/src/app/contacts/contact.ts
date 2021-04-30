export type Contact = {
    contactId: string,
    name: string,
    email: string,
    contactPhones: ContactPhone[]
};

export type ContactPhone = {
    type:string;
    value:string;
}
