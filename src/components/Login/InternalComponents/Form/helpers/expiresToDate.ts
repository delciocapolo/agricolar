export const setExpiresDate = (days: number) => {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    return (new Date(date.toUTCString()));
};