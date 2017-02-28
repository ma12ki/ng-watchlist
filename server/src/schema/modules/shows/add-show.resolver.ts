import * as moment from 'moment';

import { db } from '../../../db';

export default {
  addShow(root, args, ctx) {
    console.log(root, args, ctx);

    db.collection('lol').insertOne({
      _id: 'xDDDD',
      lol: 'mao'
    }).then((res) => {
      console.log('INSERT SUCCESSFUL', res);
    });

    return {
      _id: 'newShow' + Math.random(),
      name: args.name,
      category: args.category,
      frequency: args.frequency,
      premiereDate: moment(args.premiereDate),
      listed: false,
      tracked: false,
    };
  },
};
