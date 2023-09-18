import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-officetsf',
  templateUrl: './officetsf.component.html',
  styleUrls: ['./officetsf.component.css']
})
export class OfficetsfComponent {
  isChecked = true;
  constructor(private titleSrc:Title,private meta:Meta){
    this.titleSrc.setTitle('Buy Microsoft Office 365 License online in India from Certified Partner ');
    this.meta.addTag({name:'description',content:'Are you looking to buy office 365 license? Buy office 365 license online from UnifyCloud store or contact us for become Microsoft cloud reseller in India.'});
    this.meta.addTag({name:'keywords',content:'Microsoft Office 365, Office 365 License'});
  }
  faq=[
    {
      Ques:`What is Microsoft Office 365?`,
      Ans:`Microsoft Office 365 is a cloud-based suite of applications and communication tools that includes Outlook, Word, Excel, PowerPoint, OneDrive, and Teams.`
    },
    {
      Ques:`What are the benefits of using Microsoft Office 365?`,
      Ans:`Microsoft Office 365 provides many benefits such as improved flexibility, accessibility, updates, and productivity, as well as collaboration.`
    },
    {
      Ques:`How do I purchase and deploy Microsoft Office 365?`,
      Ans:`You can purchase and deploy Microsoft Office 365 from a certified cloud solution provider like us. We can provide you with the necessary licenses and configure the settings for your needs.`
    },
    {
      Ques:`What is the cost of Microsoft Office 365 subscription?`,
      Ans:`The cost of Microsoft Office 365 subscription varies depending on the plan you choose. We can help you choose the most suitable plan for your business's needs and budget.`
    },
    {
      Ques:`Can I customize Microsoft Office 365 to fit my business's needs?`,
      Ans:`Yes, you can customize Microsoft Office 365 to fit your business's needs by selecting the appropriate plan and configuring the settings that work best for you.`
    },
    {
      Ques:`How secure is my data in Microsoft Office 365?`,
      Ans:`Microsoft Office 365 is a highly secure platform with cutting-edge security features, data encryption, and data residency and compliance tools. We ensure that your business's data is safe and protected.`
    },
    {
      Ques:`How will Microsoft Office 365 improve my collaboration and productivity?`,
      Ans:`Microsoft Office 365 enables real-time collaboration, file sharing, document co-authoring, and video and audio-conferencing tools. These features allow teams to work together seamlessly and improve overall productivity.`
    },
    {
      Ques:`Can I access my Microsoft Office 365 applications and data from anywhere?`,
      Ans:`Yes, you can access your Microsoft Office 365 applications and data from anywhere with an Internet connection. This provides improved flexibility and accessibility for you and your team.`
    },
  ]
}
