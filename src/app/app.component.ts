import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <body>
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/dashboard">Dashboard</a>
            <a routerLink="/heroes">Heroes</a>
        </nav>
        <router-outlet></router-outlet>
        </body>`,
    styles: [`
        body{
            background-color: #f0f1ff !important;
            padding: 1.5%;
        }

        h1{
            text-align: center;
            text-shadow: 1px 2px 5px rgba(186, 150, 255, 0.62);
        }
        nav{
            background-color: #daeaea;
            padding: 2%;
            border-radius: 5px;
            box-shadow: 0px 0px 5px 1px black;
        }
    
        a{
            text-decoration: none;
            box-shadow: 0px 2px 10px 1px #999999;
            border-radius: 5px;
            padding: 1%;
            background-color: lightblue;
            color: #3a8aff;
            font-weight: bold;
            text-shadow: 1px 2px 5px rgba(186, 150, 255, 0.62);
        }

        a:hover{
            background-color: #3a8aff;
            color: lightblue;
        }
        a:active{
            text-shadow: none;
        }
    
    `]
})

export class AppComponent{
    title = 'Tour of Heroes';
}

