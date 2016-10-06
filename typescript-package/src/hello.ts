import { World } from './world';

export class Hello {
  constructor(private world: World) {}

  say(): string {
    return 'Hello ' + this.world.hi();
  }
}
