import { Discussion } from '@/features/discussion';
import { mockDiscussions } from '@/mocks/discussions';

const DiscussionPage = () => {
  return <Discussion initialComments={mockDiscussions} />;
};

export default DiscussionPage;
