export type Image_T = {
    _id: string,
    link: string,
    key: string
}


export type Pin_T = {
    _id: string,
    text: string,
    images: Image_T[],
    title: string,
    one_read: boolean,
    views: number
}