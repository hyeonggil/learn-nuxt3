// Post 인터페이스 선언
interface Post {
  title: string; // title 속성을 string으로 변경
  url: string;
  target: string;
  gacode: string;
}

// export default defineCachedEventHandler<Post>(
//   async (event) => {
//     const data: Post | null = await $fetch(
//       'http://gilnas.synology.me/nuxt/menu.json',
//     ).catch(
//       (error) => null, // 에러 시 null 반환하도록 수정
//     );

//     return data;
//   },
//   { swr: true }, // this will enable caching
// );
