import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from "../prisma/prisma.service";
export declare class CategoryService {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(createCategoryDto: CreateCategoryDto): import(".prisma/client").Prisma.Prisma__CategoryClient<import(".prisma/client").Category>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Category[]>;
    findOne(id: number): string;
    update(id: number, updateCategoryDto: UpdateCategoryDto): string;
    remove(id: number): string;
}
