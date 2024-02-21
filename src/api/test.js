const path = Bun.file('./test.json')
await Bun.write(path, 'yeet')
