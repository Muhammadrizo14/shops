import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { PrismaService } from "../prisma/prisma.service";
export declare class GenreService {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(createGenreDto: CreateGenreDto): import(".prisma/client").Prisma.Prisma__GenreClient<import(".prisma/client").Genre>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Genre[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__GenreClient<import(".prisma/client").Genre>;
    update(id: number, updateGenreDto: UpdateGenreDto): import(".prisma/client").Prisma.Prisma__GenreClient<import(".prisma/client").Genre>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__GenreClient<import(".prisma/client").Genre>;
}
