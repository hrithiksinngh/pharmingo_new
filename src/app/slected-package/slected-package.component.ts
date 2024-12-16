import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {serverApiUrl, devApiUrl } from '../../constants';

@Component({
  selector: 'app-slected-package',
  standalone: true,
  imports: [],
  templateUrl: './slected-package.component.html',
  styleUrl: './slected-package.component.css',
})
export class SlectedPackageComponent implements OnInit {
  private router = inject(Router);

  packageName: string  = 'Custom Report';

  private route = inject(ActivatedRoute);

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      console.log('Params is ------- ', params['packageName']);
      this.packageName = params['packageName'];
    });
  }

  handleExploreMore() {
    console.log('Explore More');
    this.router.navigate(['/generate-report/step/1']);
  }
}
