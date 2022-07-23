import { MovieService } from './movie.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
export declare class MovieController {
    private readonly movieService;
    constructor(movieService: MovieService);
    create(createMovieDto: CreateMovieDto): import(".prisma/client").Prisma.Prisma__MovieClient<import(".prisma/client").Movie>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Movie[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__MovieClient<import(".prisma/client").Movie>;
    update(id: string, updateMovieDto: UpdateMovieDto): import(".prisma/client").Prisma.Prisma__MovieClient<import(".prisma/client").Movie>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__MovieClient<import(".prisma/client").Movie>;
}
