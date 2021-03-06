import mongoose from 'mongoose';
import { log } from '../index';
import IRead from './IReadRepository';
import IWrite from './IWriteRepository';

class BaseRepository<T extends mongoose.Document> implements IRead<T>, IWrite<T> {

  private model: mongoose.Model<mongoose.Document>;

  constructor(schemaModel: mongoose.Model<mongoose.Document>) {
    this.model = schemaModel;
  }

  create(item: T, callback: (error: any, result: any) => void) {
    try {
      this.model.create(item, (err, res) => {
        if (err) log('error', err);

        callback(err, res);
      });
    } catch (err) {
      log(err);
    }
  }

  retrieve(callback: (error: any, result: any) => void, start?: string, items?: string) {
    if (items)
      // tslint:disable-next-line:radix
      this.model.find({}, callback).skip(parseInt(start)).limit(parseInt(items));

    else
      this.model.find({}, callback);
  }

  // tslint:disable-next-line:variable-name
  update(_id: mongoose.Types.ObjectId, item: T, callback: (error: any, result: any) => void) {
    // log(callback);
    this.model.update({ _id }, item, (err, res) => {
      if (err) log('error', err);

      callback(err, res);
    });

  }

  // tslint:disable-next-line:variable-name
  delete(_id: string, callback: (error: any, result: any) => void) {
    this.model.findByIdAndRemove({ _id: this.toObjectId(_id) }, (err, res) => {
      if (err) log('error', err);
      callback(err, res);
    });

  }

  // tslint:disable-next-line:variable-name
  findById(_id: string, callback: (error: any, result: T) => void) {
    this.model.findById(_id, callback);
  }

  findOne(query: any, callback: (error: any, result: T) => void) {
    this.model.findOne(query, callback);
  }

  // tslint:disable-next-line:variable-name
  private toObjectId(_id: string): mongoose.Types.ObjectId {
    return mongoose.Types.ObjectId.createFromHexString(_id);
  }
}

export default BaseRepository;
