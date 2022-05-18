import Role from './enum'
export class User {
    customerid!: number
    id!: number
    firstname!: string
    middlename?: string
    lastname!: string
    email!: string
    phone!: string
    roleName!: string
    customerName!: string
    address!: string

}
export class Customer {
    customerid!: number
    name!: string
    website!: string
    address!: string
}