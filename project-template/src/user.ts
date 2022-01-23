import { renderBlock } from './lib.js'

export function renderUserBlock (favoriteItemsAmount: number, username: string, avatarUrl: string) {
  const favoritesCaption =  favoriteItemsAmount ? favoriteItemsAmount : 'Ничего нет'
  const hasFavoriteItems = favoriteItemsAmount > 0 ? true : false

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${avatarUrl}" alt="${username}" />
      <div class="info">
          <p class="name"${username}</p>
          <p class="fav">
            <i class="heart-icon ${hasFavoriteItems ? 'active' : ''}"></i>${favoritesCaption} 
          </p>
      </div>
    </div>
    `
  )
}
