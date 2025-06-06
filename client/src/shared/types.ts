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

export interface ProgramsContentType {
    id: string,
    program: string,
    info: string,
    image: string,
}

export interface ProgramType {
    tagline: string,
    ytLink: string
}

export interface ProgramDictType {
    [dict_key: string]: ProgramType;
}

export interface BlogPostType {
    id: number,
    date: string,
    duration: number,
    title: string,
    content: string,
}