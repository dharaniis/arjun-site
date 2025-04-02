export interface PlanType {
    name: string,
    description: string,
    price: string,
    features: Array<string>,
}

export enum ContactIconType {
    Mail = "mail",
    Facebook = "facebook",
    Linkedin = "linkedin",
    Instagram = "instagram",
}

export interface TestimonialType {
    quote: string,
    longquote: string,
    name: string,
    profession: string,
}