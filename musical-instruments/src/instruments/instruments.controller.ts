import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InstrumentsService } from './instruments.service';
import { CreateInstrumentDto } from './dto/create-instrument.dto';
import { UpdateInstrumentDto } from './dto/update-instrument.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('instruments')
@ApiTags('instruments')
export class InstrumentsController {
  constructor(private readonly instrumentsService: InstrumentsService) {}
  
  @Get()
  findAll() {
    return this.instrumentsService.findAll();
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.instrumentsService.findOne(+id);
  }
 
  @Post()
  create(@Body() createInstrumentDto: CreateInstrumentDto) {
    return this.instrumentsService.create(createInstrumentDto);
  }
  
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInstrumentDto: UpdateInstrumentDto) {
    return this.instrumentsService.update(+id, updateInstrumentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.instrumentsService.remove(+id);
  }
}
