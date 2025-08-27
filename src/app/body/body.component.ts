import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: false,
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})

 
export class BodyComponent {
  //ARRAY OF COLORS
colors: string[] = ['#2c3e50', '#e74c3c', '#3498db', '#9b59b6', '#1abc9c', '#f39c12']
currentColorIndex: number = 0;

//function to change color of name
changeNameColor (){
  this.currentColorIndex = 
  (this.currentColorIndex + 1) %
  this.colors.length;
}
//get the current color
get currentColor(): string{
  return this.colors
  [this.currentColorIndex];
}

  profile = {
    name: "Rhavenjohn Esteban",
    title: "Dev",
    about: "Kayat ko maturog",
    skills: 
    ['Angular', 'Typescript', 'HTML/CSS', 'Responsive Design'],

    experience: [
      {
      role: 'Web Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'developin and maintaining web applications uinsg angular and related technologies'},
      {
        role: 'Frontend Intern',
        company: 'Digital Creations',
        period: '2021 - 2022',
        description: 'Assissted in building responsive user interfaces and implementing new features.'
      },
    ], 
    education:{
      degree:'BSCS',
      school:'University of Baguio',
      year: '2027',
    },
    contact: {
      email: 'rhabs@email.com',
      phone:'+1 (999)',
      location: 'Bagiw, Pinas',
    }
    
  }
}
