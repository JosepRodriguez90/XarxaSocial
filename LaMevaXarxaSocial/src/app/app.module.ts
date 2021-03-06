import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { HeaderComponent } from './components/header/header.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { LlistaComponent } from './components/perfil/llista/llista.component';
import { DetallComponent } from './components/perfil/detall/detall.component';
import { RegistreComponent } from './components/perfil/registre/registre.component';
import { AdminComponent } from './components/admin/admin.component';
import { LlistaUsComponent } from './components/admin/llista-us/llista-us.component';
import { IniciComponent } from './components/inici/inici.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    HeaderComponent,
    PerfilComponent,
    LlistaComponent,
    DetallComponent,
    RegistreComponent,
    AdminComponent,
    LlistaUsComponent,
    IniciComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
