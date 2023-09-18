import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-microsofttsf',
  templateUrl: './microsofttsf.component.html',
  styleUrls: ['./microsofttsf.component.css']
})
export class MicrosofttsfComponent {
  isChecked = true;
  constructor(private titleSrc:Title,private meta:Meta){
    this.titleSrc.setTitle('Buy Microsoft 365 online from Microsoft Certified Partner in India ');
    this.meta.addTag({name:'description',content:'Are you looking for Microsoft 365? Buy Microsoft 365 online in India from Premium CSP partner in India. We at UnifyCloud provider cloud solutions at very competitive price.'});
    this.meta.addTag({name:'keywords',content:'Microsoft 365, Microsoft 365 Reseller'});
  }
  faq=[
    {
      Ques:`What is Microsoft 365? `,
      Ans:`Microsoft 365 is a cloud-based subscription service from Microsoft that includes a range of productivity tools and services such as Office apps, cloud storage, email, and more. It is designed to help individuals and businesses streamline their workflow, increase productivity, and collaborate more effectively.`
    },
    {
      Ques:`What are the differences between Office 365 and Microsoft 365?`,
      Ans:`Office 365 refers to the subscription service that provides access to Microsoft Office applications such as Word, Excel, PowerPoint, and Outlook, while Microsoft 365 includes all of the Office 365 applications, as well as additional features such as device management, security, and advanced analytics.`
    },
    {
      Ques:`How can Microsoft 365 improve my productivity?`,
      Ans:`Microsoft 365 provides access to a range of productivity tools and services that can help you work more efficiently and effectively. With applications like Word, Excel, PowerPoint, and Teams, you can collaborate with others in real-time, automate repetitive tasks, and access your work from anywhere on any device.`
    },
    {
      Ques:`Can I access Microsoft 365 from any device? `,
      Ans:`Yes, you can access Microsoft 365 from any device with an internet connection, including your desktop computer, laptop, tablet, or mobile device.`
    },
    {
      Ques:`How secure is Microsoft 365?`,
      Ans:`Microsoft 365 has built-in security features that help protect your data and devices from cyber threats. This includes data encryption, multi-factor authentication, advanced threat protection, and more. Microsoft also provides regular updates and patches to keep the service secure.`
    },
    {
      Ques:`How much does Microsoft 365 cost? `,
      Ans:`The cost of Microsoft 365 varies depending on the plan and the number of users. Prices typically range from around $5 to $35 per user per month, with discounts available for annual subscriptions.`
    },
    {
      Ques:`What are the different plans available for Microsoft 365? `,
      Ans:`365 offers a range of plans to suit different needs, including Microsoft 365 Business Basic, Microsoft 365 Business Standard, Microsoft 365 Apps for Business, and more. Each plan includes different features and pricing.`
    },
    {
      Ques:`What applications are included in Microsoft 365? `,
      Ans:`Microsoft 365 includes a range of applications such as Word, Excel, PowerPoint, Outlook, Teams, OneNote, SharePoint, and more. The exact applications included will depend on the specific plan you choose.`
    },
    {
      Ques:`Can I use Microsoft 365 offline?`,
      Ans:`Yes, you can use Microsoft 365 offline by downloading the necessary applications and files onto your device. However, some features such as collaboration and syncing may not be available when working offline.`
    },
    {
      Ques:`What is OneDrive, and how does it work with Microsoft 365? `,
      Ans:`OneDrive is a cloud-based file storage and sharing service that is included with Microsoft 365. It allows you to store and access files from any device, and easily share files with others. OneDrive also provides features like versioning and file recovery.`
    },
    {
      Ques:`What is SharePoint, and how can it benefit my business? `,
      Ans:`SharePoint is a web-based collaboration and document management platform that is included with Microsoft 365. It allows teams to share and collaborate on files, manage workflows, and automate processes, which can help streamline business operations and improve productivity.`
    },
    {
      Ques:`How can I migrate my current email to Microsoft 365? `,
      Ans:`Microsoft provides tools and guidance to help you migrate your current email to Microsoft 365. This typically involves setting up your email accounts in Microsoft 365, importing your existing emails and contacts, and configuring your email settings.`
    },
    {
      Ques:`Can I integrate Microsoft 365 with other third-party applications? `,
      Ans:`Yes, Microsoft 365 can be integrated with a range of third-party applications and services to extend its functionality. This can be done using APIs and connectors.`
    },
    {
      Ques:`What kind of support do you offer for Microsoft 365?`,
      Ans:`Microsoft offers a range of support options for Microsoft 365, including online resources, community forums, and direct.`
    }
  ]
}
