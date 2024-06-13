import { ApiProperty } from "@nestjs/swagger";

export class CreateInstrumentDto {
    @ApiProperty()
    name: string;
    @ApiProperty({required: true})
    description?: string;
    @ApiProperty()
    type: string;
    @ApiProperty()
    fabricante: string;
    @ApiProperty()
    color: string;
    @ApiProperty({required: true})
    image?: string;
    @ApiProperty()
    price: number;
}
