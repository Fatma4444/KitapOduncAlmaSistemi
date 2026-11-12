import { Component } from '@angular/core';
import { FavoriteHeader } from './favorite-header/favorite-header';
import { FavoriteSituation } from './favorite-situation/favorite-situation';
import { FavoriteSavedList } from './favorite-saved-list/favorite-saved-list';

@Component({
  imports: [FavoriteHeader, FavoriteSituation, FavoriteSavedList],
  selector: 'app-favorite',
  styleUrl: './favorite.css',
  templateUrl: './favorite.html',
})
export class Favorite {}
