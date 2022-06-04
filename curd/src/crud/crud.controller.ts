import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { title } from 'process';
import { CrudService } from './crud.service';

@Controller('crud')
export class CrudController {
    constructor(private readonly curdSerivce: CrudService) { }


    @Get()
    async getList() {
        return this.curdSerivce.getCrud();
    }

    @Post()
    public postCar(@Body() crudDetails) {
        return this.curdSerivce.createCrud(crudDetails)
    }

    @Put('/:title/:description')
    public updateCrud(@Param('title') title, @Param('description') description){
        console.log(title + description)
        return this.curdSerivce.updateCrud(title, description);
    }

    @Delete('/:title')
    public deleteCrud(@Param('title') title){
        return this.curdSerivce.deleteCrud(title);
    }

}
