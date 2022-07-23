import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class MovieService {

  constructor(private prismaService: PrismaService) {
  }

  create(createMovieDto: CreateMovieDto) {
    return this.prismaService.movie.create({data: createMovieDto})
  }

  findAll() {
    return this.prismaService.movie.findMany();
  }

  findOne(id: number) {
    return this.prismaService.movie.findUnique({where: {id}})
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    return this.prismaService.movie.update({where: {id}, data: updateMovieDto})
  }

  remove(id: number) {
    return this.prismaService.movie.delete({where: {id}})
  }
}
