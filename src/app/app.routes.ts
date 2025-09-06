import { Routes } from '@angular/router';
import { IndexPage } from '../pages/index';
import { MainPage } from '../pages/main';

export const routes: Routes = [
  {
      path: '',
      component: IndexPage,
      title: "Хранилище рецептов"
  },
  {
    path: 'main',
    component: MainPage,
    title: "Последние ваши рецепты",
  },
];
