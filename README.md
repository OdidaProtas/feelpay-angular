### FEELPAY ANGULAR INTEGRATION GUIDE

1. First, install the `ngx-script-loader` package:

```bash
npm install ngx-script-loader
```

2. Use the `ngx-script-loader` to load the external script in your Angular component:

Assuming you've created an Angular component named `FeelPayButtonComponent`:

```typescript
import { Component, OnInit } from "@angular/core";
import { ScriptLoaderService } from "ngx-script-loader"; // Import the ScriptLoaderService

@Component({
  selector: "app-feel-pay-button",
  template: `
    <div>
      <!-- The container for the FeelPay button -->
      <div id="dreamfeel-pay-button"></div>
    </div>
  `,
})
export class FeelPayButtonComponent implements OnInit {
  constructor(private scriptLoader: ScriptLoaderService) {}

  ngOnInit(): void {
    // Load the external script
    this.scriptLoader.loadScript("https://feelpay.vercel.app/packages/v1").then(() => {
      // The script is loaded, initialize FeelPayWidget
      this.initializeFeelPay();
    });
  }

  initializeFeelPay(): void {
    // After the script is loaded, you can use it here
    const orderDetails = {
      element: "dreamfeel-pay-button",
      clientId: "afc17c43531c2441",
      clientSecret: "67d6bc1a5843172286ce6ca701f80094",
      description: "",
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
```

In this example, `ngx-script-loader` is used to handle loading the external script. Once the script is loaded, the `initializeFeelPay` method is called to initialize the FeelPayWidget as before.
