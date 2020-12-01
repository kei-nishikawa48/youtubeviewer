import { topPage } from '../TopPage/index.stories';
import NotFoundPage from '.';

export default topPage.story={ title: 'pages/NotFoundPage' };

export const notFoundPage = () => <NotFoundPage />;