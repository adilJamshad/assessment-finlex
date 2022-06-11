// import { AuthEffects } from './state/auth.effects';
// import { AUTH_STATE_NAME } from './state/auth.selector';
// import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
// import { AuthReducer } from './state/auth.reducer';
import { HomeComponent } from "./home.component";
import { HOME_STATE_NAME } from "./state/home.selector";
import { homeReducer } from "./state/home.reducer";
import { EffectsModule } from "@ngrx/effects";
import { EmployeesEffect } from "./state/home.effects";
import { ModalComponent } from "../modal/modal.component";
import { CardComponent } from "./card/card.component";

const routes: Routes = [
  {
    path: "",
    children: [{ path: "", component: HomeComponent }],
  },
];

@NgModule({
  declarations: [HomeComponent, ModalComponent, CardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(HOME_STATE_NAME, homeReducer),
    RouterModule.forChild(routes),
    EffectsModule.forFeature([EmployeesEffect]),
  ],
})
export class HomeModule {}
