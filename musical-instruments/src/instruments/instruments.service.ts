import { Injectable } from '@nestjs/common';
import { CreateInstrumentDto } from './dto/create-instrument.dto';
import { UpdateInstrumentDto } from './dto/update-instrument.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InstrumentsService {
  constructor(private prisma: PrismaService){}
  create(createInstrumentDto: CreateInstrumentDto) {
    return this.prisma.instrumentMusical.create({data: createInstrumentDto});
  }

  findAll() {
    return this.prisma.instrumentMusical.findMany();
  }

  findOne(id: number) {
    return this.prisma.instrumentMusical.findUnique({where: {id}});
  }

  update(id: number, updateInstrumentDto: UpdateInstrumentDto) {
    return this.prisma.instrumentMusical.update({where: {id},data: updateInstrumentDto,});
  }

  remove(id: number) {
    return this.prisma.instrumentMusical.delete({where: {id}});
  }
}
