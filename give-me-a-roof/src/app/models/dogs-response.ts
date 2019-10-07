import { Response } from './response';
import { Dog } from './dog';

export class DogsResponse extends Response {
  data: Dog[];
}
