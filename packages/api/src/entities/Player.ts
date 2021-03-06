import { v4 as uuid } from 'uuid';

export class Player{
  public readonly id: string;
  public name: string;

  constructor(props: Omit<Player, 'id'>, id?: string){
    // Object.assign(this, props);
    this.name = props.name;
    if(!id){
      this.id = uuid();
    } else {
      this.id = id;
    }
  }
}
