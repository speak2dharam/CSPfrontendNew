import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-window-ten',
  templateUrl: './window-ten.component.html',
  styleUrls: ['./window-ten.component.css']
})
export class WindowTenComponent {
  isChecked = true;
  constructor(private titleSrc:Title,private meta:Meta){
    this.titleSrc.setTitle('Buy Windows 10/11 profession and Enterprise License India');
    this.meta.addTag({name:'description',content:'Buy Windows 10 Professional and Enterprise License Activation Key For Lifetime at Lowest Price Online in India at UnifyCloud store.'});
    this.meta.addTag({name:'keywords',content:''});
  }
  faq=[
    {
      Ques:`Can I upgrade from Windows 10 to Windows 11 for free? `,
      Ans:`If your computer meets the minimum system requirements, you can upgrade from Windows 10 to Windows 11 for free. However, not all devices are eligible for the upgrade, so it's important to check the compatibility before upgrading.`
    },
    {
      Ques:`How much does a Windows 11 license cost? `,
      Ans:`The price of a Windows 11 license varies depending on the edition and whether it's a retail or volume license. It's best to consult with a Microsoft cloud solution provider for the current pricing.`
    },
    {
      Ques:`Can I still buy a Windows 10 license? `,
      Ans:`Yes, you can still purchase a Windows 10 license from a Microsoft cloud solution provider.`
    },
    {
      Ques:`How many devices can I activate with a single Windows license?`,
      Ans:`A single Windows license can only be activated on one device at a time. However, there are volume licensing options available for businesses that need to activate multiple devices.`
    },
    {
      Ques:`What happens if I don't activate my Windows license? `,
      Ans:`If you don't activate your Windows license, you may experience limitations such as a watermark on your desktop and a restricted ability to customize your computer. Additionally, some features may not work properly until you activate your license.`
    },
    {
      Ques:`Can I transfer my Windows license to a new computer?`,
      Ans:`Yes, you can transfer your Windows license to a new computer if you deactivate it on the old computer first. It's important to note that OEM licenses are tied to the original device and cannot be transferred.`
    },
  ]
}
