export class Recipe {
  showDetails = false;

  constructor(public title: string, public ingredients: any, public directions: any){
  }


  toggleDetails(){
    this.showDetails = !this.showDetails;
  }
}
