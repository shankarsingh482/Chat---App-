// pun intended :D
export const emojizz = text => (
  text
    .replace(new RegExp(/\:\)/, 'g'), '\u{1F642}')
    .replace(new RegExp(/\;\)/, 'g'), '\u{1F609}')
)
