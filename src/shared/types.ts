export enum CurrentPage {
    Home = "home",
    Projects = "projects",
    Contacts= "contacts"
}

export interface ProjectType {
    icon: string;
    title: string;
    description: string;
  }

export interface OtherProjectType {
    name: string;
    description?: string;
    image: string;
    link: string;
  }