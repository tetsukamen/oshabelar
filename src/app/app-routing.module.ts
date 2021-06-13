import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'create-oshaberi',
    loadChildren: () => import('./create-oshaberi/create-oshaberi.module').then(m => m.CreateOshaberiPageModule)
  },
  {
    path: 'profile/:username',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'oshaberi-detail/:oshaberi-id',
    loadChildren: () => import('./oshaberi-detail/oshaberi-detail.module').then(m => m.OshaberiDetailPageModule)
  },
  {
    path: 'like-user-list/:oshaberi-id',
    loadChildren: () => import('./like-user-list/like-user-list.module').then(m => m.LikeUserListPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then(m => m.SearchPageModule)
  },
  {
    path: 'following-userlist/:username',
    loadChildren: () => import('./following-userlist/following-userlist.module').then(m => m.FollowingUserlistPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./edit-profile/edit-profile.module').then(m => m.EditProfilePageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then(m => m.NotificationPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
