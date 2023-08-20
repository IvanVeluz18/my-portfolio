export enum CurrentPage {
    Home = "home",
    Projects = "projects",
    Contacts= "contacts"
}

export interface ClassType {
    name: string;
    description?: string;
    image: string;
    link: string;
  }