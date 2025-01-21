import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";
import internal from "stream";

export class CreatePlayerDto {

  @IsString()
  @IsNotEmpty()
  name: string

  @IsNumber()
  @IsNotEmpty()
  goalCount: number

  @IsDate()
  @IsNotEmpty()
  birthDate: Date
}
