export interface CardForm {
    type: "Visa" | "Mastercard";
    firstName?: string,
    lastName?: string,
    number: string,
    securityCode?: string
}
