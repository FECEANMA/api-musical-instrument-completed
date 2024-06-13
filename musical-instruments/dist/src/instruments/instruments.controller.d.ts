import { InstrumentsService } from './instruments.service';
import { CreateInstrumentDto } from './dto/create-instrument.dto';
import { UpdateInstrumentDto } from './dto/update-instrument.dto';
export declare class InstrumentsController {
    private readonly instrumentsService;
    constructor(instrumentsService: InstrumentsService);
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
    findOne(id: string): import(".prisma/client").Prisma.Prisma__InstrumentMusicalClient<{
        id: number;
        name: string;
        description: string;
        type: string;
        fabricante: string;
        color: string;
        image: string;
        price: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
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
    update(id: string, updateInstrumentDto: UpdateInstrumentDto): import(".prisma/client").Prisma.Prisma__InstrumentMusicalClient<{
        id: number;
        name: string;
        description: string;
        type: string;
        fabricante: string;
        color: string;
        image: string;
        price: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__InstrumentMusicalClient<{
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
