export const IdentifyType = (path: string) => {
    const explote = path.split('_');
    const typeParser: any = {
        PHONE: 'phoneNumber',
        CUIL: 'cuil',
        EMAIL: 'email',
        DOC: 'documentNumber'
    }

    return {
        value: explote[1],
        type: typeParser[explote[0]],
    }
}