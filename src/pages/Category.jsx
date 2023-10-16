import { useParams } from 'react-router-dom';
import categories from '../data/categories';
import NotFound from './NotFound';

function Category() {
  const params = useParams();

  const category = categories.find((cat) => cat.id === params.id);
  if (!category) {
    return <NotFound />;
  }
  return <div>Category</div>;
}

export default Category;
