import { Router, RouterModule } from "@angular/router";
import { CadastroComponent } from './cadastro/cadastro.component';

const APP_ROUTES = [
    {path:"", redirectTo:"/cadastro", pathMatch:"full"},
    {path:"cadastro", component: CadastroComponent},
]
export const routing = RouterModule.forRoot(APP_ROUTES);
