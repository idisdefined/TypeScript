import { renderBlock } from './lib.js'

export function renderUserBlock (favoriteItemsAmount: number, userName: string, linkToAvatar: string) {
  const favoritesCaption =  favoriteItemsAmount ? favoriteItemsAmount : 'Ничего нет'
  const hasFavoriteItems = favoriteItemsAmount > 0 ? true : false

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="../public/img/avatar.png" alt="Wade Warren" />
      <div class="info">
          <p class="name">Wade Warren</p>
          <p class="fav">
            <i class="heart-icon ${hasFavoriteItems ? 'active' : ''}"></i>${favoritesCaption} 
          </p>
      </div>
    </div>
    `
  )
}
