import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {
  breadcrumbs = [
    { name: '首頁', url: '/' },
    { name: '目錄', url: '/catalog' },
    { name: '項目', url: '/catalog/item' }
  ];

  breadcrumbsExpanded = false;

  toggleBreadcrumbs() {
    this.breadcrumbsExpanded = !this.breadcrumbsExpanded;
  }
}
