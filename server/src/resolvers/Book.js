function allBooks(parent, args, context) {
  return context.prisma.book({ id: parent.id }).books()
}

module.exports = {
  allBooks,
}
