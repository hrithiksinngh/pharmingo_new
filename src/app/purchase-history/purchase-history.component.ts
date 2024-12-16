import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {
  LucideAngularModule,
  EyeIcon,
  DownloadIcon,
  ChevronsUpDownIcon,
  LoaderIcon,
  LoaderCircleIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  HelpCircleIcon
} from 'lucide-angular';
import { serverApiUrl, devApiUrl } from '../../constants';

@Component({
  selector: 'app-purchase-history',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, RouterLink],
  templateUrl: './purchase-history.component.html',
  styleUrl: './purchase-history.component.css',
})
export class PurchaseHistoryComponent implements OnInit {
  readonly EyeIcon = EyeIcon;
  readonly DownloadIcon = DownloadIcon;
  readonly ChevronsUpDownIcon = ChevronsUpDownIcon;
  readonly LoaderIcon = LoaderIcon;
  readonly LoaderCircleIcon = LoaderCircleIcon;
  readonly ChevronsLeftIcon = ChevronsLeftIcon;
  readonly ChevronsRightIcon = ChevronsRightIcon;
  readonly HelpCircleIcon = HelpCircleIcon

  private http = inject(HttpClient);
  private router = inject(Router);

  loggedInUser: any = null;
  isLoading = true;
  isDataFetched = false;

  email: string | undefined;
  userName: string | undefined;
  companyName: string | undefined;

  fileContent: any[] = [];
  isViewFileModalOpen: boolean = false;
  isReportDataLoading: boolean = false;
  tableHeaders: any[] = [];
  tableData: any[] = [];

  purchaseHistory: any[] = [];
  paginatedData: any[] = [];
  currentPage = 1;
  rowsPerPage = 8;
  totalPages = 0;
  dateColumnsList = [
    'Price Start Date',
    'Source Update Date',
    'Indication Approval Date',
    'Assessment Publication Date'
  ];

  ngOnInit() {
    // Perform authentication check
    const user = sessionStorage.getItem('loggedInUser');

    if (user) {
      this.loggedInUser = JSON.parse(user);

      this.email = this.loggedInUser.email;
      this.userName = this.loggedInUser.user_metadata.userName;
      this.companyName = this.loggedInUser.user_metadata.companyName;
      console.log('email:', this.loggedInUser.email);
      this.fetchReportPurchaseHistory(this.loggedInUser.email);
      this.updateRowsPerPage();
    } else {
      this.router.navigate(['']);
      return; // Prevent further execution if redirected
    }
  }

   // Function to update rowsPerPage based on screen size
   updateRowsPerPage(): void {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 550) {
      this.rowsPerPage = 5; // Small screens
    } else if (screenWidth >= 560 && screenWidth <= 770) {
      this.rowsPerPage = 12; // Medium screens
    } else if (screenWidth > 770 && screenWidth <= 820) {
      this.rowsPerPage = 15; // Medium screens
    }else if (screenWidth > 820 && screenWidth <= 1024) {
      this.rowsPerPage = 18; // Medium screens
    }else {
      this.rowsPerPage = 8; // Large screens
    }
  }

  fetchReportPurchaseHistory(email: string) {
    this.isLoading = true; // Start loading
    this.isDataFetched = false; // Reset data fetched flag


    const accessToken = sessionStorage.getItem('accessToken');

    // Include Authorization header
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    
    this.http
      .post(`${serverApiUrl}/api/get-report-purchase-history`, {
        email: email,
      },{headers})
      .subscribe({
        next: (response: any) => {
          console.log('Response is ---- \n ', response.data);
          this.purchaseHistory = response.data || []; // Ensure it's an array
          this.isLoading = false; // Stop loading
          this.isDataFetched = true; // Mark data as fetched
          this.calculatePagination();
          this.getVisiblePages();
          this.showEllipsis();
        },
        error: (error) => {
          console.log('Error is ---- \n ', error);
          this.purchaseHistory = []; // Set to empty on error
          this.isLoading = false; // Stop loading
          this.isDataFetched = true; // Mark data as fetched
          this.calculatePagination();
          this.getVisiblePages();
          this.showEllipsis();
        },
      });
  }

  downloadReport(fileName: string) {
    if (fileName && fileName.length !== 0 && fileName !== null) {
      // Trigger file download on the same page
      window.location.href = `${serverApiUrl}/api/download-report/${fileName}`;
    }
  }

  viewReport(fileName: string) {
    this.isReportDataLoading = true;
    this.openModal();

    const accessToken = sessionStorage.getItem('accessToken');

    // Include Authorization header
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    if (fileName && fileName.length !== 0 && fileName !== null) {
      this.http.get(`${serverApiUrl}/api/view-report/${fileName}`,{headers}).subscribe({
        next: (response: any) => {
          this.fileContent = response.rows; // Store file content
          console.log('file Data ----- \n', response.rows);
          this.tableData = response.rows;
          this.tableHeaders =
            response.rows.length > 0 ? Object.keys(response.rows[0]) : [];
          // Open modal to display content
          this.isReportDataLoading = false;
        },
        error: (err) => {
          console.error('Error fetching report content:', err);
          this.isReportDataLoading = false;
        },
      });
    }
  }

  openModal() {
    this.isViewFileModalOpen = true;
  }

  closeModal() {
    this.isViewFileModalOpen = false;
  }

  formatCellValue(value: any): string {
    if (typeof value === 'number') {
      return value.toFixed(2);
    }
    return value || '-';
  }

  formatDate(value: string): string {
    if (value) {
      const date = new Date(value);

      // Extract day, month, and year
      const day = String(date.getDate()).padStart(2, '0'); // Ensure 2 digits
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based
      const year = date.getFullYear();

      // Return formatted date
      return `${day}-${month}-${year}`; // e.g., "14-11-2024"
    }
    return 'N/A'; // Handle null or invalid date values
  }

  calculatePagination() {
    // Sort the data in descending order by created_at
    this.purchaseHistory.sort((a, b) => {
      const dateA = new Date(a.created_at).getTime(); // Convert to timestamp
      const dateB = new Date(b.created_at).getTime(); // Convert to timestamp
      return dateB - dateA; // Descending order
    });
    
    // Calculate the total number of pages
    this.totalPages = Math.ceil(this.purchaseHistory.length / this.rowsPerPage);
    
    // Slice the data for the current page
    this.paginatedData = this.purchaseHistory.slice(
      (this.currentPage - 1) * this.rowsPerPage,
      this.currentPage * this.rowsPerPage
    );
  }
  

  goToPage(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.calculatePagination();
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.calculatePagination();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.calculatePagination();
    }
  }

  showEllipsis(): boolean {
    return this.getVisiblePages().slice(-1)[0] < this.totalPages;
  }

  getVisiblePages(): number[] {
    const pagesToShow = 2; // Number of page numbers to display
    const startPage = Math.max(
      this.currentPage - Math.floor(pagesToShow / 2),
      1
    );
    const endPage = Math.min(startPage + pagesToShow - 1, this.totalPages);

    // Adjust startPage if we're near the end
    const adjustedStartPage = Math.max(endPage - pagesToShow + 1, 1);

    // Generate an array of visible pages
    return Array.from(
      { length: endPage - adjustedStartPage + 1 },
      (_, i) => adjustedStartPage + i
    );
  }

  signOut() {
    sessionStorage.removeItem('loggedInUser');

    this.router.navigate(['/']);
  }
}
