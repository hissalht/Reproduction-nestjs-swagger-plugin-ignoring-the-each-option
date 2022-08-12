import { IsArray, IsIn } from 'class-validator';

const COLORS = ['Blue', 'Red', 'Green'];

export class CreatePersonDto {
  @IsArray()
  // the `each` option doesnt seem to get picked up by the swagger plugin
  @IsIn(COLORS, { each: true })
  favoriteColors: string[];
}
