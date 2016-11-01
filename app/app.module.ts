import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent} from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './components/register/user.service';
import { HttpModule, JsonpModule } from '@angular/http';

@NgModule({
    imports:      [ 
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { 
                path: 'register', 
                component: RegisterComponent, 
                data: {
                    title: 'Registrate'
                }
            },
            { 
                path: '', 
                component: HomeComponent, 
                data: {
                    title: 'Home'
                }
            }
        ])
    ],
    declarations: [ 
        AppComponent,
        HomeComponent,
        RegisterComponent
    ],
    bootstrap:    [ AppComponent ],
    providers: [ UserService ]
})

export class AppModule { }