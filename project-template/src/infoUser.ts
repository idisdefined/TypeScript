export class User {
  username: string
  avatarUrl: string

  constructor(username: string, avatarUrl: string) {
    this.username = username
    this.avatarUrl = avatarUrl
  }
}

export function getUserData () {
  const user: unknown = JSON.parse(window.localStorage.getItem('user'));
  Object.setPrototypeOf(user, User.prototype);

  if (user instanceof User) {
    return user; 
  } else {
    throw new Error('User in local storage is wrong');
  }
}
export function getFavoritesAmount () {
  return +window.localStorage.getItem('favoritesAmount');
}