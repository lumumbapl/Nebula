{
  "name": "nebula",
  "version": "1.0.0",
  "description": "A minimalist WordPress theme for bloggers.",
  "author": "WP Corner",
  "license": "GPL-3.0-or-later",
  "keywords": [
    "WordPress",
    "Blogging",
    "Blogger",
    "Magazine",
    "news",
    "Theme"
  ],
  "homepage": "https://github.com/lumumbapl/Nebula#readme",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/lumumbapl/Nebula.git"
  },
  "bugs": {
    "url": "https://github.com/lumumbapl/Nebula/issues"
  },
  "devDependencies": {
    "@wordpress/scripts": "^19.2.2",
    "dir-archiver": "^1.1.1",
    "node-sass": "^7.0.1",
    "rtlcss": "^3.5.0"
  },
  "rtlcssConfig": {
    "options": {
      "autoRename": false,
      "autoRenameStrict": false,
      "blacklist": {},
      "clean": true,
      "greedy": false,
      "processUrls": false,
      "stringMap": []
    },
    "plugins": [],
    "map": false
  },
  "scripts": {
    "watch": "node-sass sass/ -o ./ --source-map true --output-style expanded --indent-type tab --indent-width 1 -w",
    "compile:css": "node-sass sass/ -o ./ && stylelint '*.css' --fix || true && stylelint '*.css' --fix",
    "compile:rtl": "rtlcss style.css style-rtl.css",
    "lint:scss": "wp-scripts lint-style 'sass/**/*.scss'",
    "lint:js": "wp-scripts lint-js 'js/*.js'",
    "bundle": "dir-archiver --src . --dest ../_s.zip --exclude .DS_Store .stylelintrc.json .eslintrc .git .gitattributes .github .gitignore README.md composer.json composer.lock node_modules vendor package-lock.json package.json .travis.yml phpcs.xml.dist sass style.css.map yarn.lock"
  }
}
