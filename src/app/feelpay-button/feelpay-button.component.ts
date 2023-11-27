import { Component, OnInit } from '@angular/core';
import { ScriptService } from 'ngx-script-loader';

@Component({
  selector: 'app-feelpay-button',
  templateUrl: './feelpay-button.component.html',
  styleUrls: ['./feelpay-button.component.css'],
})
export class FeelpayButtonComponent {
  constructor(private scriptLoader: ScriptService) {}
  ngOnInit(): void {
    // Load the external script
    this.scriptLoader
      .loadScript('https://feelpay.io/packages/v1')
      .subscribe(() => {
        // The script is loaded, initialize FeelPayWidget
        this.initializeFeelPay();
      });
  }

  initializeFeelPay(): void {
    // After the script is loaded, you can use it here
    const orderDetails = {
      element: 'dreamfeel-pay-button',
      clientId: '289e48591ad7b8e1',
      clientSecret: '9eb2a27c779d9236f64f4a18cb2840ec',
      description: '',
      order: {
        // ...
      },
      onSuccess: (detail: any) => {
        // Handle success
        console.log(detail);
      },
      onError: (err: any) => {
        // Handle error
        console.log(err);
      },
      onInit: () => {},
      onUserCancel: () => {},
    };

    const feelpay = new (window as any).FeelPayWidget(orderDetails);
    feelpay.init().then((pay: any) => {
      console.log(pay);
    });
  }
}
