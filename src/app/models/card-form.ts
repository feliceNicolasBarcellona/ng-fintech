export interface CardForm {
    type: "Visa"| "Mastercard",
    firstName: string,
    lastName: string,
    cardNumber: number,
    securityCode: number
}
