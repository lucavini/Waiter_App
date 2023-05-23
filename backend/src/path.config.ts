import moduleAlias from 'module-alias';

moduleAlias.addAliases({
  '@root': __dirname,
  '@Models': __dirname + '/App/models/schemas',
  '@Repositories': __dirname + '/App/repositories',
  '@Controllers': __dirname + '/App/controllers',
  '~Enums': __dirname + '/App/models/enums',
});
