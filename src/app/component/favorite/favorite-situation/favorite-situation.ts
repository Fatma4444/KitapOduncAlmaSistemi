
import { Component } from '@angular/core';
import favoritData from '../../../data/favorite.json';

@Component({
  selector: 'app-favorite-situation',
  standalone: true,
  imports: [],
  templateUrl: './favorite-situation.html',
  styleUrl: './favorite-situation.css'
})
export class FavoriteSituation {
  user = favoritData.user;
}