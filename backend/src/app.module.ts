import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { PrismaModule } from './prisma/prisma.module';
import { GenreModule } from './genre/genre.module';
import { MovieModule } from './movie/movie.module';

@Module({
  imports: [PrismaModule, CategoryModule, GenreModule, MovieModule],
})
export class AppModule {}
