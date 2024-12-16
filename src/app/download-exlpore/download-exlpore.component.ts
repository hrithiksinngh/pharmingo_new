import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FilterService } from '../services/filter.service';
import { serverApiUrl, devApiUrl } from '../../constants';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-download-exlpore',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './download-exlpore.component.html',
  styleUrl: './download-exlpore.component.css',
})
export class DownloadExlporeComponent implements OnInit {
  @Input() userName: any = '';
  @Input() email: any = '';
  @Input() companyName: any = '';

  fileName: string = 'test_user_report_data.csv';

  constructor(private filterService: FilterService) {}

  private http = inject(HttpClient);

  isReportBuilding = true;
  isFileDownloading = false;

  startBuildReport() {
    console.log('Filters to be applied !!');
  }

  ngOnInit() {
    console.log('Building Report Started!!');

    console.log(
      'filter Values to be applied !!',
      this.filterService.getState().filterValues
    );

    this.startBuildingReport();
  }

  startBuildingReport() {
    const purchaseReportFilters = JSON.parse(
      sessionStorage.getItem('purchaseReportFilters') || '{}'
    );

    console.log('Purchase Report Filter is ---- \n', purchaseReportFilters);

    this.filterService.showInfoToast('Generating your report !!');
    const accessToken = sessionStorage.getItem('accessToken');

    // Include Authorization header
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    this.http
      .post(
        `${serverApiUrl}/api/filter-data-to-csv`,
        {
          userName: this.userName,
          userEmail: this.email,
          companyName: this.companyName,
          selectedTopic: purchaseReportFilters?.selectedTopic,
          selectedPlan: purchaseReportFilters?.selectedPlan,
          currentTab: purchaseReportFilters?.filterValues.currentTab,
          tabValue: purchaseReportFilters?.filterValues.tabValue,
          selectedCountryList:
            purchaseReportFilters?.filterValues.selectedCountryList,
          selectedBrandList:
            purchaseReportFilters?.filterValues.selectedBrandList,
          selectedInnList: purchaseReportFilters?.filterValues.selectedInnList,
          selectedColumnsList:
            purchaseReportFilters?.filterValues.selectedColumnsList,
        },
        { headers }
      )
      .subscribe({
        next: (response: any) => {
          console.log('resposne is ---- \n ', response);
          this.fileName = response.fileName;
          this.isReportBuilding = false;
          this.filterService.setCurrentStep(5);
          this.filterService.showSuccessToast(
            'Report generated successfully !!'
          );
          if (response.downloadLink) {
            this.sendPurchaseReportEmail(response.downloadLink);
          }
        },
        error: (error) => {
          console.log('error is ---- \n ', error);
        },
      });
  }

  sendPurchaseReportEmail(downloadLink: string) {
    const accessToken = sessionStorage.getItem('accessToken');

    // Include Authorization header
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    this.http
      .post(
        `${serverApiUrl}/api/send-purchase-report-email`,
        {
          to: this.email,
          name: this.userName,
          downloadLink: downloadLink,
        },
        { headers }
      )
      .subscribe({
        next: (response: any) => {
          console.log('resposne is ---- \n ', response);
        },
        error: (error) => {
          console.log('error is ---- \n ', error);
        },
      });
  }

  downloadReport() {
    if (this.fileName) {
      this.isFileDownloading = true; // Disable the button
      this.filterService.showInfoToast('Downloading your report !!');
      const downloadUrl = `${serverApiUrl}/api/download-report/${this.fileName}`;

      this.http.get(downloadUrl, { responseType: 'blob' }).subscribe({
        next: (blob) => {
          saveAs(blob, this.fileName || 'downloaded_report'); // Use file-saver for better handling
          this.isFileDownloading = false;
          this.filterService.showInfoToast('Download completed !!');
        },
        error: (err) => {
          console.error('Download error:', err);
          this.isFileDownloading = false;
          this.filterService.showErrorToast('Failed to download the file.');
        },
      });
    }
  }

  handleRestartProcess() {
    console.log('Restarting Process !!!');
    this.filterService.getState().currentStep = 0;
  }
}
