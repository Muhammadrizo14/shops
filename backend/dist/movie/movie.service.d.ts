import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { PrismaService } from "../prisma/prisma.service";
export declare class MovieService {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(createMovieDto: CreateMovieDto): import(".prisma/client").Prisma.Prisma__MovieClient<import(".prisma/client").Movie>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Movie[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__MovieClient<import(".prisma/client").Movie>;
    update(id: number, updateMovieDto: UpdateMovieDto): import(".prisma/client").Prisma.Prisma__MovieClient<import(".prisma/client").Movie>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__MovieClient<import(".prisma/client").Movie>;
}
