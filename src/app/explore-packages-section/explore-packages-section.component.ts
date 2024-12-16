import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-explore-packages-section',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './explore-packages-section.component.html',
  styleUrl: './explore-packages-section.component.css',
})
export class ExplorePackagesSectionComponent {
 
}
