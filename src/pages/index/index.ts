import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'index-page',
  templateUrl: './index.html',
  styleUrl: './index.css',
  imports: [RouterLink],
})

export class IndexPage {};