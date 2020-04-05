Package.describe({
  name: 'luco:deck-of-cards',
  version: '0.2.0',
  // Brief, one-line summary of the package.
  summary: 'HTML5 Deck of Cards',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/pakastin/deck-of-cards.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('stylus');

  api.addFiles('dist/deck.js', 'client', { bare: true });
  api.addFiles('css/card.styl', 'client');

  // Add card faces and backs
  api.addAssets('css/faces/back.png', 'client');

  // 52 deck cards
  for( var i = 0; i < 2; i++ ) {
      api.addAssets('css/faces/' + i + '.svg', 'client');
  }

  api.export(['Deck'], ['client']);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
});
