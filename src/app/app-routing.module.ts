import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  // {
  //   path: "",
  //   component: HomeComponent,
  // },
  {
    path: "",
    loadChildren: () =>
      import("./components/home/home.module").then((m) => m.HomeModule),
  },
  // {
  //   path: "counter",
  //   loadChildren: () =>
  //     import("./counter/counter.module").then((m) => m.CounterModule),
  // },
  // {
  //   path: "posts",
  //   loadChildren: () =>
  //     import("./posts/posts.module").then((m) => m.PostsModule),
  // },
  // {
  //   path: "auth",
  //   loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
