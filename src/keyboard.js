const kb = require('./keyboard-buttons')
module.exports = {
    home: [
        [kb.home.film, kb.home.cinemas],
        [kb.home.favourite]
    ],
    films: [
        [kb.films.random],
        [kb.films.action, kb.films.comedy],
        [kb.back]
    ]
}
