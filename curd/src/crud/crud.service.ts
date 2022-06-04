import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Crud, CrudDocument } from './schema/crud.schema';

@Injectable()
export class CrudService {
    constructor(@InjectModel(Crud.name) private crudModel: Model<CrudDocument>) { }
    async createCrud(bodyData) {
        const add = await this.crudModel.create(bodyData);
        return add
    }

    async getCrud(){
        return await this.crudModel.find();
    }

    async updateCrud(title, description){
        return await this.crudModel.updateOne({'title': title}, {'description': description});
    }

    async deleteCrud(title){
        return await this.crudModel.deleteOne({'title': title});
    }
}
