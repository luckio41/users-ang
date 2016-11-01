"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var router_1 = require('@angular/router');
var home_component_1 = require('./components/home/home.component');
var register_component_1 = require('./components/register/register.component');
var forms_1 = require('@angular/forms');
var user_service_1 = require('./components/register/user.service');
var http_1 = require('@angular/http');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                forms_1.ReactiveFormsModule,
                router_1.RouterModule.forRoot([
                    {
                        path: 'register',
                        component: register_component_1.RegisterComponent,
                        data: {
                            title: 'Registrate'
                        }
                    },
                    {
                        path: '',
                        component: home_component_1.HomeComponent,
                        data: {
                            title: 'Home'
                        }
                    }
                ])
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                register_component_1.RegisterComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map