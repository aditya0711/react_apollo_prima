async function feed(parent, args, context) {
  const count = await context.prisma
    .linksConnection({
      where: {
        OR: [
          { description_contains: args.filter },
          { url_contains: args.filter },
        ],
      },
    })
    .aggregate()
    .count()
  const links = await context.prisma.links({
    where: {
      OR: [
        { description_contains: args.filter },
        { url_contains: args.filter },
      ],
    },
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy,
  })
  return {
    count,
    links,
  }
}
async function allBooks(parent, args, context) {
  const count = await context.prisma
    .booksConnection()
    .aggregate()
    .count()

  const books = await context.prisma.books({
    where: {
      OR: [
        { description_contains: args.filter },
        { url_contains: args.filter },
      ],
    },
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy,
  })
  return {
    count,
    books,
  }
}


module.exports = {
  feed,
  allBooks
}
