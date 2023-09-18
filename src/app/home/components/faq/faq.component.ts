import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  constructor(private titleSrc:Title,private meta:Meta){
    this.titleSrc.setTitle('FAQs :: Unifycloud India');
    this.meta.addTag({name:'description',content:''});
    this.meta.addTag({name:'keywords',content:''});
  }
  faq=[
    {
      Ques:'What cloud services do Microsoft provide to customers in India?',
      Ans:`Microsoft provides a variety of cloud services to its customers in India, including Azure, Office 365, Dynamics 365, and others.`
    },
    {
      Ques:'Is it only for cloud?',
      Ans:`Yes. The programme's name, 'Cloud Solution Provider,' indicates that it is cloud-only. Furthermore, it is limited to Microsoft Public Cloud. Office365, SharePoint Online, Skype for Business Online, and more productivity tools are available. However, security features such as the Enterprise Mobility Suite (EMS) and Azure cloud platform services are also available.`
    },
    {
      Ques:'Is the CSP a licencing scheme?',
      Ans:'It is not only a licencing program, though. Your Microsoft public cloud subscriptions, such as Office365, the Enterprise Mobility Suite (EMS), Azure, and Dynamics CRM Online, are provided by CSP. But it is more than simply a platform for licencing. You have the same freedom through CSP as you would from Microsoft directly, but your partner will send you a monthly charge for subscription (software) and services. Your CSP partner is required to provide you with support around-the-clock. CSP is therefore more than "just" a licencing solution, according to this.'
    },
    {
      Ques:`How can businesses benefit from Microsoft's cloud solutions?`,
      Ans:`Businesses can benefit from Microsoft's cloud solutions in several ways, such as increased agility and productivity, scalability, cost savings, improved security, and easier access to data and applications.`
    },
    {
      Ques:`What are the advantages of using Microsoft's cloud compared to other providers?`,
      Ans:`Microsoft's cloud offers several distinct advantages over other providers, such as its strong security features, global presence, extensive network of partners and integrations, hybrid cloud options, and powerful AI capabilities.`
    },
    {
      Ques:`Why should I choose a Microsoft Cloud Solution Provider in India?`,
      Ans:`Working with a Microsoft Cloud Solution Provider in India gives you access to local support and expertise. The provider can help you choose the right Microsoft cloud services for your business, provide implementation and migration support, and offer ongoing technical support and training.`
    },
    {
      Ques:`How secure is data on Microsoft's cloud platform?`,
      Ans:`Microsoft's cloud platform is considered highly secure, with multiple layers of protection and compliance with industry standards and regulations.`
    },
    {
      Ques:`What kind of support and assistance can customers expect from Microsoft's cloud solution provider in India?`,
      Ans:`Microsoft's cloud solution provider in India offers a range of support and assistance services, including technical support, migration services, training, and consulting.`
    },
    {
      Ques:`How can businesses migrate their existing systems to Microsoft's cloud?`,
      Ans:`Businesses can migrate their existing systems to Microsoft's cloud using a variety of tools and services provided by Microsoft and its partners.`
    },
    {
      Ques:`What is the pricing model for Microsoft's cloud solutions and what are the payment options?`,
      Ans:`Businesses can migrate their existing systems to Microsoft's cloud using a variety of tools and services provided by Microsoft and its partners.`
    },
    {
      Ques:`Can businesses integrate their existing software with Microsoft's cloud solutions?`,
      Ans:`Businesses can migrate their existing systems to Microsoft's cloud using a variety of tools and services provided by Microsoft and its partners.`
    },
    {
      Ques:`What kind of technical support can I expect from my Microsoft Cloud Solution Provider in India? `,
      Ans:`Your Microsoft Cloud Solution Provider will provide technical support to help you resolve any issues or problems that arise. They can also offer training and consulting services to help you get the most out of your Microsoft cloud services.`
    }
  ]
  
}
