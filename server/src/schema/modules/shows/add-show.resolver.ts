import * as moment from 'moment';

import { collections } from './collections';

export default {
  async addShow(root, args, ctx) {
    console.log(root, args, ctx);

    const res = await collections.show.insertOne({
      _id: 'xDDDD' + Math.random(),
      lol: 'mao',
    });

    console.log(res);

    return {
      _id: 'newShow' + Math.random(),
      name: args.name,
      category: args.category,
      frequency: args.frequency,
      premiereDate: moment(),
      listed: false,
      tracked: false,
    };
  },
};
