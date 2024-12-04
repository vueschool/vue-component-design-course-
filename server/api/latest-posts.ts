export default defineEventHandler(async (event) => {
  // return a list of dummy posts
  return [
    {
      id: 1,
      title: 'Hello World',
      imageUrl: 'https://picsum.photos/600/450?random=1',
      content: 'This is my first post',
    },
    {
      id: 2,
      title: 'Second Post',
      imageUrl: 'https://picsum.photos/600/450?random=2',
      content: 'This is my second post',
    },
    {
      id: 3,
      title: 'Third Post',
      imageUrl: 'https://picsum.photos/600/450?random=3',
      content: 'This is my third post',
    },
    {
      id: 4,
      title: 'Fourth Post',
      imageUrl: 'https://picsum.photos/600/450?random=3',
      content: 'This is my fourth post',
    },
  ]
})
