class Collection {
    constructor(model){
        this.model = model;
    }

    async read(data_id) {
        let records = null;
        if (data_id){
            records = await this.model.findOne({where: {id: data_id}})
        } else{
            records = await this.model.findAll();
        }
        return records;
    }

    async add(obj){
        let newRecord = await this.model.create(obj);
        return newRecord
    }

    async update(obj, data_id){
        let foundObj = await this.model.findOne({where: {id: data_id}});
        let updatedObj = await foundObj.update(obj);
        return updatedObj;
    }

    async delete(data_id){
        let record = await this.model.destroy({where: {id: data_id}});
        return record;
    }

    async findAuthorBooks(id, model){
        let record = await this.model.findOne({
            where: {id},
            include: model,
        });

        return record;
    }
}

module.exports = Collection;