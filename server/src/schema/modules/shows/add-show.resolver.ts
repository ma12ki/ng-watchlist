import * as moment from 'moment';

export default {
  addShow(root, args, ctx) {
    console.log(root, args, ctx);

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
