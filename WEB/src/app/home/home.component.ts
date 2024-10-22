import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';

export interface objetoData{
  id: number;
  nombre: string;
  descripcion: string;
}


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  datosApi: objetoData[] = []
  constructor(private data: DataService) {}

  ngOnInit(){
    this.data.getDatos().subscribe((datos) => {
      if(datos['intStatus'] == 200){
        this.datosApi = datos['strAnswer']
      }
    })
  }
}
