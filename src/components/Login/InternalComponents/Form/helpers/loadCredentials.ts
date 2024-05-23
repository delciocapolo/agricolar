export function loadCredentials(email: string, token: string) {
    localStorage['token'] = token;
    localStorage['email'] = email;
}