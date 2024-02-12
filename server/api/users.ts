export default defineCachedEventHandler(
  async (event) => {
    const data = await $fetch(
      'https://gilnas.synology.me/nuxt/hello.json',
    ).catch((error) => error.data);

    return data;
  },
  { swr: true }, // this will enable caching
);
