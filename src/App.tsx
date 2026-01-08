import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './components/layout';
import { MessagesPage, DiscussionPage, AttachmentsPage } from './pages';
import { UserProvider } from './contexts';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path='/' element={<Navigate to='/messages' replace />} />
            <Route path='/messages' element={<MessagesPage />} />
            <Route path='/discussion' element={<DiscussionPage />} />
            <Route path='/attachments' element={<AttachmentsPage />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
