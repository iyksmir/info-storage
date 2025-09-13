import { Component } from "@angular/core";
import { RecentRecepies } from "./components/recent-recepies";

@Component({
    selector: 'main-page',
    templateUrl: './index.html',
    styleUrl: './index.css',
    imports: [RecentRecepies]
})

export class MainPage {};