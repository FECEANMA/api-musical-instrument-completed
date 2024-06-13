import { CreateInstrumentDto } from './dto/create-instrument.dto';
import { UpdateInstrumentDto } from './dto/update-instrument.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class InstrumentsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createInstrumentDto: CreateInstrumentDto): import(".prisma/client").Prisma.Prisma__InstrumentMusicalClient<{
        id: number;
        name: string;
        description: string;
        type: string;
        fabricante: string;
        color: string;
        image: string;
        price: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        description: string;
        type: string;
        fabricante: string;
        color: string;
        image: string;
        price: number;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__InstrumentMusicalClient<{
        id: number;
        name: string;
        description: string;
        type: string;
        fabricante: string;
        color: string;
        image: string;
        price: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateInstrumentDto: UpdateInstrumentDto): import(".prisma/client").Prisma.Prisma__InstrumentMusicalClient<{
        id: number;
        name: string;
        description: string;
        type: string;
        fabricante: string;
        color: string;
        image: string;
        price: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__InstrumentMusicalClient<{
        id: number;
        name: string;
        description: string;
        type: string;
        fabricante: string;
        color: string;
        image: string;
        price: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
