import PostListItem from '../components/PostListItem';
import NoPostList from '../components/NoPostList';
import useGetPostList from '../queries/useGetPostList.ts';

const Home = () => {
  const { data: postList = [], isError, isLoading } = useGetPostList();

  if (isLoading) {
    return <div>...불러오는 중...</div>;
  }

  if (postList.length == 0 || isError) {
    return <NoPostList />;
  }

  // const fetchPostList = async () => {
  //   const { data } = await getPostList();
  //   const sortedList = data.sort((PostA, PostB) => {
  //     if (PostA.id >= PostB.id) return -1;
  //     else return 1;
  //   });
  //   // data.reverse();
  //   setPostList(sortedList);
  // };
  //
  // useEffect(() => {
  //   fetchPostList();
  // }, []);

  if (postList.length == 0 || isError) {
    return <NoPostList />;
  }

  return (
    <div>
      {postList.map(item => (
        <PostListItem key={item.id} id={`${item.id}`} title={item.title} contents={item.contents} tag={item.tag} />
        // <PostListItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Home;
