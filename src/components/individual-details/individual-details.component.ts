import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { individual } from 'src/models/individual';
import { Location } from '@angular/common';
import { IndividualService } from 'src/app/individual.service';

@Component({
  selector: 'app-individual-details',
  templateUrl: './individual-details.component.html',
  styleUrls: ['./individual-details.component.scss']
})

export class IndividualDetailsComponent implements OnInit {
  @Input() individuo: individual | undefined;
  
  constructor(private route: ActivatedRoute,
    private location: Location,
    private individualService: IndividualService) { }

  ngOnInit(): void {
    this.getIndividuo();
  }
  getIndividuo(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.individualService.getIndividual(id)
      .subscribe(persona => this.individuo = persona);
  }
  goBack(): void {
    this.location.back();
  }
  save() : void {
    if (this.individuo){
      this.individualService.updateIndividual(this.individuo)
      .subscribe(()=>this.goBack());
    }
  } 
}
