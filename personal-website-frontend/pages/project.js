import { useRouter } from 'next/router';

const project = () => {
  const router = useRouter();
  return (
    <h1>{router.query.proj}</h1>
  );
};

export default project;