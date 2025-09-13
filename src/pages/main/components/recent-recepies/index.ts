import { Component } from "@angular/core";
import { RecipePreviewCard } from "../recipe-preview-card";

@Component({
    selector: 'recent-recepies',
    templateUrl: './index.html',
    styleUrl: './index.css',
    imports: [RecipePreviewCard]
})

export class RecentRecepies {}