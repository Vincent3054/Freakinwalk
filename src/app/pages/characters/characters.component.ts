import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss'
})
export class CharactersComponent implements OnInit {
  characterId: string | null = null;
  imageUrl: string | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.characterId = params.get('id');
      this.updateImageUrl();
    });
  }

  updateImageUrl() {
    this.imageUrl = `../../../assets/images/characters${this.characterId}.gif`;
  }
}
