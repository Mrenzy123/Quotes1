export class Describe {
    showDescription: boolean;
    constructor(public name: string,public author:string,public description: string ,public completeDate: Date){
        this.showDescription=false;
      }
}
