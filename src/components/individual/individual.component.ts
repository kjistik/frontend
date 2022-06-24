import { Component, OnInit } from '@angular/core';
import { individual } from 'src/models/individual';
import { IndividualService } from 'src/app/individual.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.scss']
})
export class IndividualComponent implements OnInit {
  persona? : individual;  
  individuos: individual[] = [];
  personas : individual[] = [];
  constructor(
    private http : HttpClient,
    private individualService: IndividualService) { }

  getIndividuals(): void {
    this.individualService.getIndividuals()
      .subscribe(personas => this.individuos = personas);
    }

 add(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.individualService.addIndividual({ name } as individual)
    .subscribe(persona => {
      this.personas.push(persona)
    });
}
delete(individuo: individual): void {
  this.personas = this.personas.filter(h => h !== individuo);
  this.individualService.deleteIndividual(individuo.id).subscribe();
} 
  ngOnInit(): void {
    this.getIndividuals();
  }

}
