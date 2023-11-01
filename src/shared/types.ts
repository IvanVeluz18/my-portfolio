export enum CurrentPage {
    Home = "home",
    About= "about",
    Projects = "projects",
    Contacts= "contacts",
    
}

export interface ProjectType {
    image: string;
    icon?: string;
    title: string;
    description: string;
  }

export interface OtherProjectType {
    name: string;
    description?: string;
    image: string;
    link: string;
  }