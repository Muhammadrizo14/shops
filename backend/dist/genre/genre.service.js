"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenreService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let GenreService = class GenreService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    create(createGenreDto) {
        return this.prismaService.genre.create({ data: createGenreDto });
    }
    findAll() {
        return this.prismaService.genre.findMany();
    }
    findOne(id) {
        return this.prismaService.genre.findUnique({ where: { id } });
    }
    update(id, updateGenreDto) {
        return this.prismaService.genre.update({ where: { id }, data: updateGenreDto });
    }
    remove(id) {
        return this.prismaService.genre.delete({ where: { id } });
    }
};
GenreService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], GenreService);
exports.GenreService = GenreService;
//# sourceMappingURL=genre.service.js.map