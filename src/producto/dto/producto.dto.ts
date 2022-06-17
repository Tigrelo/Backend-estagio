import { IsNotEmpty, IsNumber, Min } from "class-validator";
import { IsNotBlank } from "src/decorators/is-not-blank.decorator";

export class ProductoDto {

    @IsNotBlank({message: 'o curso não pode ficar vazio'})
    nomme?: string;

    @IsNumber()
    @IsNotEmpty()
    @Min(10, {message: 'o preço deve ser de pelo menos 10 reais'})
    precio?: number;
}